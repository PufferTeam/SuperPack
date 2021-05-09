//priority: 2000

onEvent('jei.hide.items', event => {

    
 var color = [
    'white',
    'orange',
    'magenta',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray',
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black'
];

    event.hide([

        //Refined Storage
        'refinedstorage:creative_controller',
        'refinedstorage:crafter',
        'refinedstorage:crafting_monitor',
        'refinedstorage:crafter_manager',
        'refinedstorage:pattern_grid',
        'refinedstorage:exporter',
        'refinedstorage:importer',
        'refinedstorage:constructor',
        'refinedstorage:destructor',
        'refinedstorage:pattern',
        'refinedstorage:fortune_3_upgrade',
        'refinedstorage:fortune_2_upgrade',
        'refinedstorage:fortune_1_upgrade',
        'refinedstorage:silk_touch_upgrade',
        'refinedstorage:crafting_upgrade',

        //Mekanism Pipes
        'mekanism:basic_universal_cable',
        'mekanism:advanced_universal_cable',
        'mekanism:elite_universal_cable',
        'mekanism:ultimate_universal_cable',

        'mekanism:basic_mechanical_pipe',
        'mekanism:advanced_mechanical_pipe',
        'mekanism:elite_mechanical_pipe',
        'mekanism:ultimate_mechanical_pipe',

        'mekanism:basic_logistical_transporter',
        'mekanism:advanced_logistical_transporter',
        'mekanism:elite_logistical_transporter',
        'mekanism:ultimate_logistical_transporter',
        'mekanism:restrictive_transporter',
        'mekanism:diversion_transporter',
        'mekanism:logistical_sorter',

        'mekanism:formulaic_assemblicator',
        'mekanism:crafting_formula',

        //Pneumaticcraft
        'pneumaticcraft:logistics_configurator',
        Item.of('pneumaticcraft:logistics_configurator', {"pneumaticcraft:air":30000}),
        'pneumaticcraft:logistics_frame_storage',
        'pneumaticcraft:logistics_frame_default_storage',
        'pneumaticcraft:logistics_frame_passive_provider',
        'pneumaticcraft:logistics_frame_active_provider',
        'pneumaticcraft:logistics_frame_requester',
        'pneumaticcraft:logistics_core',
        'pneumaticcraft:logistics_drone',
        Item.of('pneumaticcraft:logistics_drone', {"pneumaticcraft:air":120000}),
        'pneumaticcraft:logistics_module',

        'pneumaticcraft:programmable_controller',
        'pneumaticcraft:programmer',
        'pneumaticcraft:programming_puzzle',
        'pneumaticcraft:network_api',
        'pneumaticcraft:network_data_storage',
        'pneumaticcraft:drone',
        Item.of('pneumaticcraft:drone', {"pneumaticcraft:air":120000}),

        'pneumaticcraft:lubricant_bucket',
        'pneumaticcraft:gasoline_bucket',
        'pneumaticcraft:oil_bucket',
        'pneumaticcraft:biodiesel_bucket',
        'pneumaticcraft:vegetable_oil_bucket',
        'pneumaticcraft:ethanol_bucket',

        'pneumaticcraft:small_tank',
        'pneumaticcraft:medium_tank',
        'pneumaticcraft:large_tank',
        'pneumaticcraft:huge_tank',

        //Engineer's Decor
        'engineersdecor:small_tree_cutter',
        'engineersdecor:small_block_breaker',
        'engineersdecor:small_solar_panel',
        'engineersdecor:factory_placer',

        //Storage Drawers
        'storagedrawers:compacting_drawers_3',

        //Emerald
        'mekanism:dust_emerald',

        //Sulfur
        'bloodmagic:sulfur',
        'immersiveengineering:dust_sulfur',
        'mekanism:dust_sulfur',

        //Sawdust
        'immersiveengineering:dust_wood',
        'mekanism:sawdust',

        //Coke
        'immersiveengineering:coal_coke',
        'immersiveengineering:coke',

        //Buzzier Bees
        'buzzier_bees:honey_apple',

        //Diamond Dust
        'mekanism:dust_diamond',
        'createaddition:diamond_grit',

        //CreateA Wires
        'createaddition:copper_spool',
        'createaddition:gold_spool',
        'createaddition:iron_spool',
        'createaddition:connector',

        //Iron Dust
        'bloodmagic:ironsand',
        'mekanism:dust_iron',
        'immersiveengineering:dust_iron',

        //Iron Plate
        'immersiveengineering:plate_iron',
        'create:iron_sheet',

        //Iron Rod
        'createaddition:iron_rod',

        //Gold Dust
        'bloodmagic:goldsand',
        'mekanism:dust_gold',
        'immersiveengineering:dust_gold',

        //Gold Plate
        'immersiveengineering:plate_gold',
        'create:golden_sheet',

        //Copper Ingot
        'iceandfire:copper_ingot',
        'mekanism:ingot_copper',
        'create:copper_ingot',
        'immersiveengineering:ingot_copper',
        'tconstruct:copper_ingot',

        //Copper Dust
        'immersiveengineering:dust_copper',
        'mekanism:dust_copper',

        //Copper Nugget
        'iceandfire:copper_nugget',
        'mekanism:nugget_copper',
        'create:copper_nugget',
        'immersiveengineering:nugget_copper',
        'tconstruct:copper_nugget',

        //Copper Plate
        'immersiveengineering:plate_copper',
        'create:copper_sheet',

        //Tin Ingot
        'mekanism:ingot_tin',

        //Tin Dust
        'mekanism:dust_tin',

        //Tin Nugget
        'mekanism:nugget_tin',

        //Lead Ingot
        'immersiveengineering:ingot_lead',
        'mekanism:ingot_lead',

        //Lead Dust
        'immersiveengineering:dust_lead',
        'mekanism:dust_lead',

        //Lead Nugget
        'immersiveengineering:nugget_lead',
        'mekanism:nugget_lead',

        //Lead Plate
        'immersiveengineering:plate_lead',

        //Silver Ingot
        'immersiveengineering:ingot_silver',
        'iceandfire:silver_ingot',

        //Silver Dust
        'immersiveengineering:dust_silver',

        //Silver Nugget
        'immersiveengineering:nugget_silver',
        'iceandfire:silver_nugget',

        //Silver Plate
        'immersiveengineering:plate_silver',

        //Nickel Ingot
        'immersiveengineering:ingot_nickel',

        //Nickel Dust
        'immersiveengineering:dust_nickel',

        //Nickel Nugget
        'immersiveengineering:nugget_nickel',

        //Nickel Plate
        'immersiveengineering:plate_nickel',

        //Uranium Ingot
        'immersiveengineering:ingot_uranium',

        //Uranium Nugget
        'immersiveengineering:nugget_uranium',

        //Uranium Dust
        'immersiveengineering:dust_uranium',

        //Steel Ingot
        'immersiveengineering:ingot_steel',

        //Steel Nugget
        'immersiveengineering:nugget_steel',

        //Steel Dust
        'immersiveengineering:dust_steel',

        //Electrum Ingot
        'immersiveengineering:ingot_electrum',

        //Electrum Dust
        'immersiveengineering:dust_electrum',

        //Electrum Plate
        'immersiveengineering:plate_electrum',

        //Electrum Nugget
        'immersiveengineering:nugget_electrum',

        //Constantan Ingot
        'immersiveengineering:ingot_constantan',

        //Constantan Dust
        'immersiveengineering:dust_constantan',

        //Constantan Nugget
        'immersiveengineering:nugget_constantan',

        //Constantan Plate
        'immersiveengineering:plate_constantan',

        //Bronze Ingot
        'mekanism:ingot_bronze',

        //Bronze Dust
        'mekanism:dust_bronze',

        //Bronze Nugget
        'mekanism:nugget_bronze'
    ]);

    color.forEach(c => event.hide(`refinedstorage:${c}_creative_controller`));
    color.forEach(c => event.hide(`refinedstorage:${c}_controller`));
    color.forEach(c => event.hide(`refinedstorage:${c}_grid`));
    color.forEach(c => event.hide(`refinedstorage:${c}_crafting_grid`));
    color.forEach(c => event.hide(`refinedstorage:${c}_fluid_grid`));
    color.forEach(c => event.hide(`refinedstorage:${c}_detector`));
    color.forEach(c => event.hide(`refinedstorage:${c}_relay`));
    color.forEach(c => event.hide(`refinedstorage:${c}_network_receiver`));
    color.forEach(c => event.hide(`refinedstorage:${c}_network_transmitter`));
    color.forEach(c => event.hide(`refinedstorage:${c}_network_relay`));
    color.forEach(c => event.hide(`refinedstorage:${c}_network_detector`));
    color.forEach(c => event.hide(`refinedstorage:${c}_security_manager`));
    color.forEach(c => event.hide(`refinedstorage:${c}_wireless_transmitter`));
    color.forEach(c => event.hide(`refinedstorage:${c}_disk_manipulator`));
    color.forEach(c => event.hide(`refinedstorage:${c}_pattern_grid`));
    color.forEach(c => event.hide(`refinedstorage:${c}_crafter_manager`));  
    color.forEach(c => event.hide(`refinedstorage:${c}_crafting_monitor`));
    color.forEach(c => event.hide(`refinedstorage:${c}_crafter`));

})




onEvent('jei.hide.fluids', event => {

    event.hide([

        //Pneumaticcraft Liquids
        'pneumaticcraft:lubricant',
        'pneumaticcraft:gasoline',
        'pneumaticcraft:oil',
        'pneumaticcraft:biodiesel',
        'pneumaticcraft:vegetable_oil',
        'pneumaticcraft:ethanol'

    ]);

})