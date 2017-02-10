<?php require '../header.php'; ?>



    <h2>Cool</h2>
    <nav class="top">
        <div class="dropdownBackground">
            <span class="arrow"></span>
        </div>

        <ul class="cool">
            <li>
                <a href="#">About Me</a>
                <div class="dropdown dropdown1">
                    <div class="bio">
                        <img src="https://logo.clearbit.com/wesbos.com">
                        <p>Wes Bos sure does love web development. He teaches things like JavaScript, CSS and BBQ. Wait. BBQ isn't part of web development. It should be though!</p>
                    </div>
                </div>
            </li>
            <li>
                <a href="#">Courses</a>
                <ul class="dropdown courses">
                    <li>
                        <span class="code">RFB</span>
                        <a href="https://ReactForBeginners.com">React For Beginners</a>
                    </li>
                    <li>
                        <span class="code">ES6</span>
                        <a href="https://ES6.io">ES6 For Everyone</a>
                    </li>
                    <li>
                        <span class="code">STPU</span>
                        <a href="https://SublimeTextBook.com">Sublime Text Power User</a>
                    </li>
                    <li>
                        <span class="code">WTF</span>
                        <a href="http://flexbox.io">What The Flexbox?!</a>
                    </li>
                    <li>
                        <span class="code">LRX</span>
                        <a href="http://LearnRedux.com">Learn Redux</a>
                    </li>
                    <li>
                        <span class="code">CLPU</span>
                        <a href="http://CommandLinePowerUser.com">Command Line Power User</a>
                    </li>
                    <li>
                        <span class="code">MMD</span>
                        <a href="http://MasteringMarkdown.com">Mastering Markdown</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">Other Links</a>
                <ul class="dropdown dropdown3">
                    <li><a class="button" href="http://twitter.com/wesbos">Twiter</a></li>
                    <li><a class="button" href="http://facebook.com/wesbos.developer">Facebook</a></li>
                    <li><a class="button" href="http://wesbos.com">Blog</a></li>
                    <li><a class="button" href="http://wesbos.com/courses">Course Catalog</a></li>
                </ul>
            </li>
        </ul>
    </nav>

    <script src="<?= SITE_TEMPLATE_PATH.'dist/js/lesson-26.js'?>"></script>



<?php require '../footer.php'; ?>