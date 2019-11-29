<template>
    <div id="vcomments"></div>
</template>
 
<script>
export default {
    name: 'Valine',
    mounted: function () {
        const Valine = require('valine');
        if (typeof window !== 'undefined') {
            this.window = window
            window.AV = require('leancloud-storage')
        }

        new Valine({
            el: '#vcomments',
            appId: 'H26iKkbCxGmDVflRNd8NFt1B-gzGzoHsz',
            appKey: 'U4Arzom9kOqJRMNhhu12r49K',
            notify: false,
            verify: false,
            avatar: 'mm',
            placeholder: '风一样的少年'
        });
    },
}
</script>