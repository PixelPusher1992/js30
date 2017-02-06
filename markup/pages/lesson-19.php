<?php require '../header.php'; ?>




    <div class="photobooth">
        <div class="controls">
            <button>Take Photo</button>
                  <div class="rgb">
                    <label for="rmin">Red Min:</label>
                    <input type="range" min=0 max=255 name="rmin">
                    <label for="rmax">Red Max:</label>
                    <input type="range" min=0 max=255 name="rmax">

                    <br>

                    <label for="gmin">Green Min:</label>
                    <input type="range" min=0 max=255 name="gmin">
                    <label for="gmax">Green Max:</label>
                    <input type="range" min=0 max=255 name="gmax">

                    <br>

                    <label for="bmin">Blue Min:</label>
                    <input type="range" min=0 max=255 name="bmin">
                    <label for="bmax">Blue Max:</label>
                    <input type="range" min=0 max=255 name="bmax">
                  </div>
        </div>

        <canvas class="photo"></canvas>
        <video class="player"></video>
        <div class="strip"></div>
    </div>

    <audio class="snap" src="http://wesbos.com/demos/photobooth/snap.mp3" hidden></audio>

    <script src="<?= SITE_TEMPLATE_PATH.'dist/js/lesson-19.js'?>"></script>



<?php require '../footer.php'; ?>