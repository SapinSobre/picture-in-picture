const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaStream() {
    try {
        const mediaStream = navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
    } catch(error) {
        // here the error is catched...
        console.log("Oooops... There is an error!", error);
    }
}

// On load
selectMediaStream();