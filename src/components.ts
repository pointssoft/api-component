import { Editor } from "grapesjs";
import { RequiredPluginOptions } from ".";

export const typeForm = "form";
export const typeInput = "input";
export const typeButton = "button";
export const typeLabel = "label";
export const typeText = "text";
export const typeDesc = "desc";
export const typeDiv = "div";
export const typeHiddenDiv = "hiddenDiv";
export const typeNavbar = "navbar";
export const typeHero = "hero";
export const typeWrapper = "wrapper";
export const typeSocial = "social";

export default (editor: Editor, opts: RequiredPluginOptions) => {
  const { Components } = editor;
  const { label } = opts;
  let productData: any;
  const productPrefix = opts.classPrefix;
  const idContainer = `${typeForm}-container`;

  const nameTrait = {
    name: "name",
  };

  const placeholderTrait = {
    name: "placeholder",
  };

  const requiredTrait = {
    type: "checkbox",
    name: "required",
  };

  const checkIfInPreview = (ev: Event) => {
    if (!editor.Commands.isActive("preview")) {
      ev.preventDefault();
    }
  };

  // Form component
  Components.addType(typeForm, {
    view: {
      onRender() {
        productData = this.model.attributes.selectedData;
      },
      events: {
        submit: (e: Event) => e.preventDefault(),
      } as any,
    },
    model: {
      defaults: {
        tagName: "form",
        droppable: ":not(form)",
        draggable: ":not(form)",
        name: label,
        attributes: {
          class: `${productPrefix} ${productPrefix}-container`,
          method: "post",
          action: `${
            document.location.protocol + "//" + document.location.host
          }/checkout`,
        },
        traits: [
          {
            type: typeForm,
            name: "product",
          },
        ],
        components: { type: idContainer, data: productData },
        styles: `
          .${productPrefix} {
            max-width: 50rem;
            padding: 20px;
            border-radius: 10px;
            box-shadow: rgb(223 223 223) 0px 6px 20px 7px;
            margin: 1rem;
            outline: none !important;
            border: 2px solid #d9d9d9;

          }

          .${productPrefix}-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
            margin-bottom: 2rem;
            padding: 3rem;
          }

          @media only screen and (max-width: 600px) {
            .${productPrefix}{
              width: 90%;
            }

            .${productPrefix}-container {
              padding: 0.3rem;
              padding-bottom: 2rem;
            }
          }
        `,
      },
      init() {
        this.on("change:attributes:selectedData", () => {
          // Take Selected Data object from the traits
          const data = this.getAttributes().selectedData;

          // Testing
          const wrapper: any = editor.getWrapper();
          const idEl = wrapper.find(".productId")[0].view?.attr;
          const priceEl = wrapper.find(".productPrice")[0].view?.attr;
          const qntyEl = wrapper.find(".productQuantity")[0].view?.attr;
          console.log(idEl, priceEl, qntyEl);

          idEl.value = data.id;
          priceEl.value = data.price;
          qntyEl.value = 1;

          // idEl.el.innerHTML = data.id;
          // priceEl.el.innerHTML = data.price;
          // qntyEl.el.innerHTML = 1;

          // Grab the DOM Elements
          // const idElem: any = Components.getById("productId").view;
          // const priceElem: any = Components.getById("productPrice").view;
          // const quantityElem: any = Components.getById("productQuantity").view;

          // idElem.el.innerHTML = data.id;
          // priceElem.el.innerHTML = data.price;
          // quantityElem.el.innerHTML = 1;

          // Get the CSRF token from the meta tag
          let csrfToken =
            document.head.querySelector('meta[name="csrf-token"]') ||
            "{{ csrf_token() }}";

          // Set the CSRF token as the value of the input field
          let token = Components.getById("token").view?.attr;

          if (token) {
            token.value = csrfToken;
          } else {
            console.error("Token input element not found");
          }
        });
      },
    },
  });

  // For Input  Label
  Components.addType(typeLabel, {
    isComponent: (el) => el.tagName == "LABEL",
    model: {
      defaults: {
        tagName: "label",
        droppable: false,
        highlightable: false,
        attributes: { class: `${productPrefix}-idLabel` },
        styles:
          opts.style ||
          `
          .${productPrefix}-idLabel {
            
          } 
          `,
      },
    },
  });

  // For input div
  Components.addType(typeDiv, {
    isComponent: (el) => el.tagName == "DIV",
    model: {
      defaults: {
        tagName: "div",
        droppable: false,
        highlightable: false,
        attributes: { class: `${productPrefix}-inputDiv` },
        styles:
          opts.style ||
          `
          .${productPrefix}-inputDiv {
            display: flex;
            gap: 2rem;
            justify-content: space-between;
            font-size: 1.2rem !important;
            align-items: center;
            width: 26rem;
          }

          
          
          @media only screen and (max-width: 600px) {
            .${productPrefix}-inputDiv{
              width: 100%;
              font-size: 1rem;
              flex-direction: column;
              gap: 0.5rem;
  
            }
          }
          `,
      },
    },
  });

  // For hidden input div
  Components.addType(typeHiddenDiv, {
    isComponent: (el) => el.tagName == "DIV",
    model: {
      defaults: {
        tagName: "div",
        droppable: false,
        highlightable: false,
        attributes: { class: `${productPrefix}-hiddenInput` },
        styles:
          opts.style ||
          `
          .${productPrefix}-hiddenInput {
            display: none;
          }
          `,
      },
    },
  });

  // Input Elements
  Components.addType(typeInput, {
    isComponent: (el) => el.tagName == "INPUT",
    model: {
      defaults: {
        tagName: "input",
        droppable: false,
        highlightable: false,
        attributes: { type: "text", class: `${productPrefix}-inputField` },
        traits: [
          nameTrait,
          placeholderTrait,
          {
            type: "select",
            name: "type",
            options: [{ value: "text" }],
          },
          requiredTrait,
        ],
        styles:
          opts.style ||
          `
          .${productPrefix}-inputField {
            border: 2px solid #10101033;
            padding: 0.5rem;
            outline: none;
            border-radius: 10px;
          } 
          `,
      },
    },

    extendFnView: ["updateAttributes"],
    view: {
      updateAttributes() {
        this.el.setAttribute("autocomplete", "off");
      },
    },
  });

  // Form Button
  Components.addType(typeButton, {
    extend: typeInput,
    isComponent: (el) => el.tagName == "BUTTON",
    model: {
      defaults: {
        tagName: "button",
        attributes: {
          type: "submit",
          value: "submit",
          class: `${productPrefix}-inputBtn btn btn-success`,
        },
        text: "Submit Now",
      },
    },
  });

  // Social icons div
  editor.Components.addType(typeSocial, {
    isComponent: (el) => el.tagName == "DIV",
    model: {
      defaults: {
        name: "Social Icons",
        tagName: "div",
      },
    },
  });

  // Wrapper div
  Components.addType(typeWrapper, {
    isComponent: (el) => el.tagName == "DIV",

    model: {
      defaults: {
        name: "Wrapper",
        tagName: "div",
        attributes: {
          style: "margin-bottom: 1rem; padding-bottom: 1rem;",
        },
      },
    },
  });

  Components.addType(typeHero, {
    isComponent: (el) => el.tagName == "DIV",

    model: {
      defaults: {
        name: "Hero Div",
        tagName: "div",
        class: "gjs-droppable",
      },
    },
  });

  Components.addType("sect100", {
    isComponent: (el) => el.tagName == "DIV",

    model: {
      defaults: {
        name: "1 Section Div",
        tagName: "div",
        class: "gjs-droppable",
      },
    },
  });

  // Section of 1/2
  Components.addType("sect50", {
    isComponent: (el) => el.tagName == "DIV",

    model: {
      defaults: {
        name: "2 Section Div",
        tagName: "div",
        class: "gjs-droppable",
      },
    },
  });

  // Section of 1/3
  Components.addType("sect30", {
    isComponent: (el) => el.tagName == "DIV",

    model: {
      defaults: {
        name: "3 Section Div",
        tagName: "div",
        class: "gjs-droppable",
      },
    },
  });

  //  Section of 3/7
  Components.addType("sect37", {
    isComponent: (el) => el.tagName == "DIV",

    model: {
      defaults: {
        name: "3/7 Section Div",
        tagName: "div",
        class: "gjs-droppable",
      },
    },
  });

  // For single text block
  Components.addType("text", {
    isComponent: (el) => el.tagName == "P",

    model: {
      defaults: {
        name: "Text Sect",
        tagName: "p",
        draggable: true, // Make the component draggable
        droppable: true,
        class: "gjs-droppable",
      },
    },
  });

  // For single text block
  Components.addType("customer-review", {
    isComponent: (el) => el.tagName == "DIV",

    model: {
      defaults: {
        name: "Editable  Div",
        tagName: "div",
        class: "gjs-droppable",
      },
    },
  });

  // For  video component
  Components.addType("video", {
    model: {
      defaults: {
        attributes: { class: `${productPrefix}-video` },
        styles:
          opts.style ||
          `
            .${productPrefix}-video {
              height: 350px;
               width: 615px;
               padding: 0.5rem;
            }

            @media only screen and (max-width: 600px) {
              .${productPrefix}-video{
                width: 100%;
                height: 100%;
              }
            }
            `,
      },
    },
  });
};
