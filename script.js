let draggedItem = null
        const divs = document.querySelectorAll(".image")

        for (let i = 0; i < divs.length; i++) {

            // Assign event dragstart to all divs/image-divs
            divs[i].addEventListener("dragstart", (e) => {
                draggedItem = e.currentTarget
                // console.log(e, "start working")
            })

            // Assign event dragover to all divs/image-divs
            divs[i].addEventListener("dragover", (e) => {
                // console.log(e,"dragover is working")
                e.preventDefault()
            })

            divs[i].addEventListener('drop', (e) => {
                const dropTarget = e.currentTarget
                console.log(e,"Drop")
                if (draggedItem.id !== dropTarget.id) {
                    // const imageForDraggedItem = draggedItem.style.backgroundImage
                    // const imageForDroppedItem = dropTarget.backgroundImage
                    const imageForDraggedItem = getComputedStyle(draggedItem).backgroundImage
                    const imageForDroppedItem = getComputedStyle(dropTarget).backgroundImage

                    //Assign item from Dragged item to dropped Item
                    dropTarget.style.backgroundImage = imageForDraggedItem

                    // Assign image from dropped item to dragged item
                    draggedItem.style.backgroundImage = imageForDroppedItem
                } 
            })

        } 