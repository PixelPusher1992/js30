<?php require '../header.php'; ?>




    <div class="voiceinator">

        <h1>The Voiceinator 5000</h1>

        <select name="voice" id="voices">
            <option value="">Select A Voice</option>
        </select>

        <label for="rate">Rate:</label>
        <input name="rate" type="range" min="0" max="3" value="1" step="0.1">

        <label for="pitch">Pitch:</label>

        <input name="pitch" type="range" min="0" max="2" step="0.1">
        <textarea name="text">Hello! I love JavaScript 👍</textarea>
        <button id="stop">Stop!</button>
        <button id="speak">Speak</button>

    </div>

    <script src="<?= SITE_TEMPLATE_PATH.'dist/js/lesson-23.js'?>"></script>



<?php require '../footer.php'; ?>