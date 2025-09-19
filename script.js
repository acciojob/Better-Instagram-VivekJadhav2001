//your code here
const images = document.querySelectorAll(".image")
        let draggedImage = null;

        for (let i = 0; i < images.length; i++) {
            images[i].addEventListener("dragstart", (e) => {
                draggedImage = e.currentTarget
            })

            images[i].addEventListener("dragover", (e) => {
                e.preventDefault()
            })

            images[i].addEventListener("drop", (e) => {

                const dropTarget = e.currentTarget
                if (draggedImage.id !== dropTarget.id) {
                    const imageForDraggedItem = getComputedStyle(draggedImage).backgroundImage
                    const imageForDroppedItem = getComputedStyle(dropTarget).backgroundImage

                    //Assign item from Dragged item to dropped Item
                    dropTarget.style.backgroundImage = imageForDraggedItem

                    // Assign image from dropped item to dragged item
                    draggedImage.style.backgroundImage = imageForDroppedItem
                }
            })
        }