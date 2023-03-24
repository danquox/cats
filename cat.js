document.addEventListener("DOMContentLoaded", () => {
    let mediaType = 0;
    document.getElementById("msb").addEventListener("click", () => {
        if (mediaType === 0) {
            document.getElementById("selection").style.transform = "translateX(137.5px)"
            mediaType = 1;
        } else if (mediaType === 1) {
            document.getElementById("selection").style.transform = "translateX(0)"
            mediaType = 0;
        }
    })

    document.getElementById("cat-form").addEventListener("animationend", () => {
        document.getElementById("cat-image-visible").style.display = "flex"
        document.getElementById("cat-form").style.display = "none";
    })

    document.getElementById("cat-button").addEventListener("click", async() => {
        let text = document.getElementById("cat-text").value.trim();

        if (mediaType === 0) {
            if (text !== "") {
                await fetch(
                    `https://cataas.com/cat/says/${text}?width=500`
                )
                .then(response => response.blob())
                .then(imageBlob => {
                    const imageObjectURL = URL.createObjectURL(imageBlob);
                    document.getElementById("cat-image").setAttribute("src", imageObjectURL);
                });
                
                document.getElementById("cat-form").style.animation = "form-out 1.5s forwards"
                return
            }
            await fetch(
                "https://cataas.com/cat?width=500"
            )
            .then(response => response.blob())
            .then(imageBlob => {
                const imageObjectURL = URL.createObjectURL(imageBlob);
                document.getElementById("cat-image").setAttribute("src", imageObjectURL);
            });
            
            document.getElementById("cat-form").style.animation = "form-out 1.5s forwards"
        } else {
            await fetch(
                "https://cataas.com/cat/gif?width=500"
            )
            .then(response => response.blob())
            .then(imageBlob => {
                const imageObjectURL = URL.createObjectURL(imageBlob);
                document.getElementById("cat-image").setAttribute("src", imageObjectURL);
            });

            document.getElementById("cat-form").style.animation = "form-out 1.5s forwards"
        }
    })

    document.getElementById("cool-button").addEventListener("click", () => {
        window.location.reload();
    })
})