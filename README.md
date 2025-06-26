# 🧠 AI Object Detector | TensorFlow.js + React + Webcam

An AI-powered real-time product detection web app that uses TensorFlow.js (COCO-SSD model) to detect objects (e.g., phones, bottles, laptops) via webcam, and instantly display contextual e-commerce data like name, price, and image.


---

## 🚀 Features

- 🔍 Real-time webcam-based object detection
- 🏷️ Product info display (name, price, image)
- 📦 Uses TensorFlow.js COCO-SSD model
- 🔊 Audio notification on product detection
- 💡 Easily extendable to include size guides and product comparison

---

### ❓ The Problem
In modern e-commerce and smart retail, users often:
- Struggle to **visually identify products** in real-time
- Lack **instant access** to product name, price, or catalog options
- Miss out on interactive or AR-based shopping experiences


### ✅ This Project Solves It By:
- 🎥 Detecting products from live camera feed
- 💬 Showing real-time product details on screen
- 🛍️ Laying the foundation for AR shopping, smart kiosks, and interactive comparison


### 🌍 Real-World Use Cases
| Scenario                   | Application                                      |
|----------------------------|--------------------------------------------------|
| AR Shopping                | Live product info and “Buy Now” integration      |
| Smart Retail Kiosks        | Detect and recommend based on visual input       |
| Cataloging Tools           | Instantly log products in inventory by webcam    |

---

## 🧪 Tech Stack

- ⚛️ React (Next.js)
- 🎨 Tailwind CSS
- 🤖 TensorFlow.js COCO-SSD
- 📸 react-webcam
- 🔊 Audio Alerts (lodash - throttle)

---

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
