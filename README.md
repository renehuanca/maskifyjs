# Maskify

Lightweight JavaScript library for creating dynamic **masking effects** based on mouse movement.

## 🌟 Features

- Easy-to-use API.
- Customizable mask size, color, and strength.
- Lightweight and fast.
- Works in modern browsers with CSS.
- No dependencies.

## Usage

To use Maskify, simply create an instance of the `Maskify` class and pass the target element and optional settings.

```html
<div class="mask-container" id="mask">
  <h1>Welcome to Maskify!</h1>
</div>

<script src="maskify.js"></script>
<script>
  // Create a new Maskify instance
  const mask = new Maskify("#mask", { color: "black", size: "20%" });
</script>
```

## 🚀 Installation

You can use Maskify in your project either by downloading the files or installing via npm.

### Option 1: Download the File

1. Go to the [GitHub repository](https://github.com/renehuanca/maskify).
2. Download `maskify.js`.
3. Include them in your HTML file:

```html
  <script src="maskify.js"></script>
```

### Option 2: Install via npm

If you're using npm, you can install Maskify with the following command:

```bash
npm install maskify
```

### Options

You can customize the following options when initializing the Maskify instance:

- **`color`**: The color of the mask (default: `black`).
- **`size`**: The size of the mask (default: `15%`).
- **`strength`**: The strength of the mask's gradient effect (default: `50`).
- **`fallbackColor`**: The color used when the browser doesn't support masking (default: `red`).

#### Example with Custom Options:

```js
const mask = new Maskify("#mask", { color: "black", size: "25%", strength: 60 });
```

## 🛠️ Methods

### `destroy()`

If you no longer need the mask effect, you can destroy it with the `destroy()` method. This will remove the mouse event listener and stop the effect.

```js
mask.destroy();
```

## 🌍 Browser Support

Maskify works in modern browsers, including:

- Chrome
- Firefox
- Safari
- Edge

Browsers that support CSS `mask` and `radial-gradient` should work without issues.

## 💡 Contributing

We welcome contributions! If you'd like to contribute, feel free to fork the repository, make improvements, and submit a pull request.

### How to Contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## 📄 License

Maskify is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

**Maskify** is built with 💙 and is designed to make adding dynamic mask effects super easy and fun!


