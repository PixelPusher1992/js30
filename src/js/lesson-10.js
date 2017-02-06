/** LESSON 10 **/
$(document).ready(function () {

    const checkboxes = $('.inbox input[type="checkbox"]');
    let lastChecked;
    function handleCheck(e) {
        let inBetween = false;
        if(e.shiftKey && this.checked){
            [...checkboxes].forEach(checkbox => {
                console.log(checkbox);
                if(checkbox === this || checkbox === lastChecked){
                    inBetween = !inBetween;
                    console.log('-------------');
                }
                if (inBetween) {
                    checkbox.checked = true;
                }
            })
        }
        lastChecked = this;
    }

    checkboxes.each(function () {
        $(this).on('click', handleCheck)
    });

});