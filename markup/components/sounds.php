<?php
/**
 * @var array $arParams
 * @var array $arResult
 */
?>

<?php foreach ($arResult as $sounds_data) :?>
    <audio data-key="<?= $sounds_data['NUMBER'] ?>" src="<?=SITE_TEMPLATE_PATH.$sounds_data['SRC'] ?>"></audio>
<?php endforeach;?>