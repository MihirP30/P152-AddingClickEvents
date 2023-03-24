AFRAME.registerComponent("car-model", {
  schema: {
    modelRef: { type: "string", default: "./models/car/scene.gltf" },
    clickCounter: { type: "number", default: 0 }
  },
  init: function() {
    this.el.setAttribute("gltf-model", this.data.modelRef);
    this.el.setAttribute("position", { x: 0, y: 50, z: 80 });
    this.el.setAttribute("rotation", { x: 0, y: 0, z: 0 });
  },
  update: function() {
    window.addEventListener("click", e => {
      this.data.clickCounter = this.data.clickCounter + 1;
      if (this.data.clickCounter === 1) {
        this.el.setAttribute("rotation", { x: 0, y: 45, z: 0 });
      }
      else if (this.data.clickCounter === 2) {
        this.el.setAttribute("rotation", { x: 0, y: 135, z: 0 });
      }
      else if (this.data.clickCounter === 3) {
        this.el.setAttribute("rotation", { x: 0, y: 225, z: 0 });
      }
      else if (this.data.clickCounter === 4) {
        this.el.setAttribute("rotation", { x: 0, y: 315, z: 0 });
        document.querySelector("#camera").setAttribute("position", { x: 0, y: 195, z: 450 });
      }
      else {
        this.el.setAttribute("rotation", { x: 0, y: -100, z: 0 });
        document.querySelector("#camera").setAttribute("position", { x: 0, y: 50, z: 250 });
        this.data.clickCounter = 0;
      }
    });
  }
});
