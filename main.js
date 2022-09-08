import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

// Connects to data-controller="typed-js"
export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["Have a break", "Have a KitKat"],
      typeSpeed: 80,
      loop: true
    })
  }
}
