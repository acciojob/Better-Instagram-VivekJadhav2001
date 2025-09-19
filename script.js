const images = document.querySelectorAll(".image");
    let draggedImage = null;

    images.forEach(image => {
      image.addEventListener("dragstart", (e) => {
        draggedImage = e.currentTarget;
      });

      image.addEventListener("dragover", (e) => {
        e.preventDefault(); // allow drop
      });

      image.addEventListener("drop", (e) => {
        e.preventDefault();
        const dropTarget = e.currentTarget;

        if (draggedImage && draggedImage !== dropTarget) {
          const draggedImgTag = draggedImage.querySelector("img");
          const dropImgTag = dropTarget.querySelector("img");

          // swap src attributes
          const tempSrc = draggedImgTag.src;
          draggedImgTag.src = dropImgTag.src;
          dropImgTag.src = tempSrc;
        }
      });
    });