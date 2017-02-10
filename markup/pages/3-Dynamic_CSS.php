<?php require '../header.php'; ?>



<div class="html3">
    <div class="body3">
        <h2>Update CSS Variables with <span class='hl'>JS</span></h2>

        <div class="controls">
            <label for="spacing">Spacing:</label>
            <input class="input3" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px">

            <label for="blur">Blur:</label>
            <input class="input3" type="range" name="blur" min="0" max="25" value="10" data-sizing="px">

            <label for="base">Base Color</label>
            <input class="input3" type="color" name="base" value="#ffc600">
        </div>

        <img class="img3" src="https://source.unsplash.com/7bwQXzbF6KE/800x500">
    </div>
</div>
<script src="<?= SITE_TEMPLATE_PATH.'dist/js/lesson-3.js'?>"></script>
<link rel="stylesheet" href="<?=SITE_TEMPLATE_PATH.'dist/css/3.css'?>"/>




<?php require '../footer.php'; ?>
