<?php
/**
 * @var array $arParams
 * @var array $arResult
 */
?>

<div class="keys">
    <?php foreach ($arResult as $keys_data) :?>
        <div data-key="<?= $keys_data['NUMBER'] ?>" class="key">
            <kbd class="kbd"><?= $keys_data['BUTTON'] ?></kbd>
            <span class="sound"><?= $keys_data['NAME'] ?></span>
        </div>
    <?php endforeach;?>
</div>