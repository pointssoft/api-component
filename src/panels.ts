import { Editor } from "grapesjs";
import { RequiredPluginOptions } from ".";

export default (editor: Editor, opts: RequiredPluginOptions) => {
  // Remove view code panel button
  editor.Panels.removeButton("options", "export-template");

  // Add new button for sending data to server
  editor.Panels.addButton("options", {
    id: "publishSite",
    active: true, // active by default
    className: "btn-toggle-borders",
    label: "Publish",
    command: "sw-visibility",
  });
  const btn: any = editor.Panels.getButton("options", "publishSite");
  btn.on("change", async () => {
    // get html  & css from the editor
    const htmlString = editor.getHtml();
    const css = editor.getCss();

    // Get and load current project data
    const projectData = editor.getProjectData();
    editor.loadProjectData(projectData);

    // For removing the body tag
    const html = htmlString
      .replace(/<body[^>]*>/, "")
      .replace(/<\/body\s*>/, "");

    // get the Id from the location
    // const url = document.location.href;
    const url = "https://chepapest.com/admin/landing_page/edit/1";
    const id = url.split("/").pop();
    const dataObj = {
      id,
      html: `${html}`,
      css: `${css}`,
      projectData,
    };

    console.log(dataObj);

    const projectEndpoint = `https://chepapest.com/api/dev/user/landing-page/${id}/save`;

    // Send data
    async function sendData() {
      const response = await fetch(projectEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataObj),
      });
      const res = await response.json();

      if (res.data === "OK") {
        editor.Modal.open({
          title: "Your Page has been Published. Thank you",
          styles: `
          .gjs-mdl-header {
            height: 50rem !important;
          }
          `,
        });
      }
      console.log(res);
    }

    sendData();
  });
};