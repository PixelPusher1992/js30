<?php require '../header.php'; ?>


    <div class="timer">
        <div class="timer__controls">
            <button data-time="20" class="timer__button">20 Secs</button>
            <button data-time="300" class="timer__button">Work 5</button>
            <button data-time="900" class="timer__button">Quick 15</button>
            <button data-time="1200" class="timer__button">Snack 20</button>
            <button data-time="3600" class="timer__button">Lunch Break</button>
            <form name="customForm" id="custom">
                <input type="text" name="minutes" placeholder="Enter Minutes">
            </form>
        </div>
        <div class="display">
            <h1 class="display__time-left"></h1>
            <p class="display__end-time"></p>
        </div>
    </div>

    <script src="<?= SITE_TEMPLATE_PATH.'dist/js/lesson-29.js'?>"></script>
    <link rel="stylesheet" href="<?=SITE_TEMPLATE_PATH.'dist/css/29.css'?>"/>



<?php require '../footer.php'; ?>