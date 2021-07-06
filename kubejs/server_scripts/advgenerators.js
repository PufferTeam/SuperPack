//priority: 1500

events.listen('recipes', function (event) {

    //Power IO
    event.remove({output: 'advgenerators:power_io'})
    event.shaped('advgenerators:power_io', ['AVA', 'STL', 'AVA'], {
        A: 'advgenerators:iron_frame',
        S: 'thermal:copper_ingot',
        L: 'thermal:lead_ingot',
        V: 'thermal:redstone_servo',
        T: 'thermal:rf_coil'
    })

});