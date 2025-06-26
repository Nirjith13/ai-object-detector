"use client";
import React, { useEffect, useRef, useState } from "react";
import { load as cocoSSDLoad } from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import { renderPredictions } from "@/utils/render-predictions";

let detectInterval;

const ObjectDetection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  async function runCoco() {
    setIsLoading(true);
    const net = await cocoSSDLoad();
    setIsLoading(false);

    detectInterval = setInterval(() => {
      runObjectDetection(net);
    }, 100);
  }

  async function runObjectDetection(net) {
    if (
      canvasRef.current &&
      webcamRef.current?.video?.readyState === 4
    ) {
      const video = webcamRef.current.video;
      canvasRef.current.width = video.videoWidth;
      canvasRef.current.height = video.videoHeight;

      const detectedObjects = await net.detect(video, undefined, 0.6);
      const context = canvasRef.current.getContext("2d");

      renderPredictions(detectedObjects, context, setProduct);
    }
  }

  useEffect(() => {
    runCoco();
    return () => clearInterval(detectInterval); // Cleanup
  }, []);

  return (
    <div className="mt-8">
      {isLoading ? (
        <div>Loading AI Model...</div>
      ) : (
        <div className="relative flex flex-col lg:flex-row justify-center items-start gap-6">
          {/* Webcam */}
          <div className="relative w-full max-w-2xl">
            <Webcam
              ref={webcamRef}
              className="rounded-md w-full"
              muted
            />
            <canvas
              ref={canvasRef}
              className="absolute top-0 left-0 z-10 w-full"
            />
          </div>

          {/* Product UI */}
          {product && (
            <div className="bg-white shadow-xl rounded-lg p-4 w-full max-w-xs">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                🛍️ Detected Product
              </h2>
              <p className="text-gray-700">
                <span className="font-semibold">Name:</span> {product.name}
              </p>
              <p className="text-gray-700 mb-3">
                <span className="font-semibold">Price:</span> {product.price}
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Buy Now
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ObjectDetection;
