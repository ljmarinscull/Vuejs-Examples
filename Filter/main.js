Vue.filter('capitalize', (value) => {
    const [fistCharacter,...restOfThem] = value
    return fistCharacter.toUpperCase() + restOfThem.join('')
})

new Vue({
    el: 'main',
    data:{
        options:[]
    }
});