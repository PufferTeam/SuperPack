onEvent('recipes', event => {
    function wood(isModded, logType, modName, woodName, logItem, logStrippedItem, plankItem, stairItem, slabItem, fenceItem, gateItem, doorItem, trapdoorItem, pPlateItem, bookshelfItem, craftingTableItem, boatItem, vertPlankItem) {

    //Manual
    event.remove({ output: 'ars_nouveau:archwood_planks', type: 'minecraft:crafting_shapeless'});
    event.shapeless(item.of('ars_nouveau:archwood_planks', 2), ['#forge:logs/archwood'])

    //Stick
    event.remove({ output: 'mekanism:sawdust', type: 'mekanism:sawing'});

    //Mekanism Sawmill
    event.recipes.mekanism.sawing(Item.of('minecraft:stick', 9), '#minecraft:wooden_stairs')

    //Thermal Sawmill
    event.recipes.thermal.sawmill(Item.of('minecraft:stick', 9), '#minecraft:wooden_stairs')

    //Mekanism Sawmill
    event.recipes.mekanism.sawing(Item.of('minecraft:stick', 9), '#minecraft:wooden_slabs')

    //Thermal Sawmill
    event.recipes.thermal.sawmill(Item.of('minecraft:stick', 9), '#minecraft:wooden_slabs')

    //Mekanism Sawmill
    event.recipes.mekanism.sawing(Item.of('minecraft:stick', 9), '#minecraft:planks')

    //Thermal Sawmill
    event.recipes.thermal.sawmill(Item.of('minecraft:stick', 9), '#minecraft:planks')
    

    if (plankItem !== null) {

        //Remove Output
        event.remove({ output: plankItem, type: 'create:cutting'});
        event.remove({ output: plankItem, type: 'immersiveengineering:sawmill'});
        event.remove({ output: plankItem, type: 'mekanism:sawing'});
        event.remove({ output: plankItem, type: 'thermal:sawmill'});
        event.remove({ output: plankItem, type: 'minecraft:crafting_shapeless'});

        //Mekanism Sawmill
        event.recipes.mekanism.sawing(Item.of('minecraft:stick', 2), plankItem)

        //Thermal Sawmill
        event.recipes.thermal.sawmill(Item.of('minecraft:stick', 2), plankItem)
    }

    if (logStrippedItem !== null) {

        //Remove Output
        event.remove({ output: logStrippedItem, type: 'create:cutting'});
        event.remove({ output: logStrippedItem, type: 'immersiveengineering:sawmill'});

    }

    if (logStrippedItem !== null && plankItem !== null && logItem !== null) {

        //Create Sawmill
        event.recipes.create.cutting(logStrippedItem, `#${modName}:${woodName}_${logType}s`)
        event.recipes.create.cutting(Item.of(plankItem, 4), logStrippedItem)

        //IE Sawmill
        event.recipes.immersiveengineering.sawmill(Item.of(plankItem, 5), `#${modName}:${woodName}_${logType}s`, [{stripping: true, output: 'thermal:sawdust'}, {stripping: false, output: 'thermal:sawdust'}], logStrippedItem)
        
    }

    if (plankItem !== null && logItem !== null) {

        //Thermal Sawmill
        event.recipes.thermal.sawmill(Item.of(plankItem, 6), `#${modName}:${woodName}_${logType}s`)

        //Mekanism Sawmill
        event.recipes.mekanism.sawing(Item.of(plankItem, 6), `#${modName}:${woodName}_${logType}s`)

        //Log to Planks
        event.shapeless(item.of(plankItem, 2), [`#${modName}:${woodName}_${logType}s`])

    }
    
    if (plankItem !== null && vertPlankItem !== null) {

        //Vert Plank to Plank
        event.shapeless(plankItem, [vertPlankItem])

    }

    //Recycling
    if (pPlateItem !== null && plankItem !== null) {

        //Mekanism Sawmill
        event.recipes.mekanism.sawing(Item.of(plankItem, 2), pPlateItem)

        //Thermal Sawmill
        event.recipes.thermal.sawmill(Item.of(plankItem, 2), pPlateItem)
        
    }

    if (boatItem !== null && plankItem !== null) {

        //Mekanism Sawmill
        event.recipes.mekanism.sawing(Item.of(plankItem, 5), boatItem)

        //Thermal Sawmill
        event.recipes.thermal.sawmill(Item.of(plankItem, 5), boatItem)
        
    }

    if (gateItem !== null && plankItem !== null) {

        //Mekanism Sawmill
        event.recipes.mekanism.sawing(Item.of(plankItem, 2), gateItem, Item.of('minecraft:stick', 4))

        //Thermal Sawmill
        event.custom({"type": "thermal:sawmill","ingredient": {"item": `${gateItem}`},"result": [{"item": `${plankItem}`,"count": 2},{"item": "minecraft:stick","count": 4}],"energy": 1000})
    }

    if (fenceItem !== null && plankItem !== null) {

        //Mekanism Sawmill
        event.recipes.mekanism.sawing(Item.of(plankItem, 1), fenceItem, Item.of('minecraft:stick', 2))

        //Thermal Sawmill
        event.custom({"type": "thermal:sawmill","ingredient": {"item": `${fenceItem}`},"result": [{"item": `${plankItem}`,"count": 1},{"item": "minecraft:stick","count": 2}],"energy": 1000})
        
    }

    if (doorItem !== null && plankItem !== null) {

        //Mekanism Sawmill
        event.recipes.mekanism.sawing(Item.of(plankItem, 2), doorItem)

        //Thermal Sawmill
        event.recipes.thermal.sawmill(Item.of(plankItem, 2), doorItem)
        
    }

    if (trapdoorItem !== null && plankItem !== null) {

        //Mekanism Sawmill
        event.recipes.mekanism.sawing(Item.of(plankItem, 3), trapdoorItem)

        //Thermal Sawmill
        event.recipes.thermal.sawmill(Item.of(plankItem, 3), trapdoorItem)
        
    }

    if (craftingTableItem !== null && plankItem !== null) {

        //Mekanism Sawmill
        event.recipes.mekanism.sawing(Item.of(plankItem, 4), craftingTableItem)

        //Thermal Sawmill
        event.recipes.thermal.sawmill(Item.of(plankItem, 4), craftingTableItem)
        
    }

    if (bookshelfItem !== null && plankItem !== null) {

        //Mekanism Sawmill
        event.recipes.mekanism.sawing(Item.of(plankItem, 4), bookshelfItem, Item.of('minecraft:book', 3))

        //Thermal Sawmill
        event.custom({"type": "thermal:sawmill","ingredient": {"item": `${bookshelfItem}`},"result": [{"item": `${plankItem}`,"count": 4},{"item": "minecraft:book","count": 3}],"energy": 1000})

        
    }

    }

    wood(false, 'log', 'minecraft', 'oak', 'minecraft:oak_log', 'minecraft:stripped_oak_log', 'minecraft:oak_planks', 'minecraft:oak_stairs', 'minecraft:oak_slab', 'minecraft:oak_fence', 'minecraft:oak_fence_gate', 'minecraft:oak_door', 'minecraft:oak_trapdoor', 'minecraft:oak_pressure_plate', 'minecraft:bookshelf', 'minecraft:crafting_table', 'minecraft:oak_boat', 'quark:vertical_oak_planks');
    wood(false, 'log', 'minecraft', 'spruce', 'minecraft:spruce_log', 'minecraft:stripped_spruce_log', 'minecraft:spruce_planks', 'minecraft:spruce_stairs', 'minecraft:spruce_slab', 'minecraft:spruce_fence', 'minecraft:spruce_fence_gate', 'minecraft:spruce_door', 'minecraft:spruce_trapdoor', 'minecraft:spruce_pressure_plate', 'quark:spruce_bookshelf', null, 'minecraft:spruce_boat', 'quark:vertical_spruce_planks');
    wood(false, 'log', 'minecraft', 'birch', 'minecraft:birch_log', 'minecraft:stripped_birch_log', 'minecraft:birch_planks', 'minecraft:birch_stairs', 'minecraft:birch_slab', 'minecraft:birch_fence', 'minecraft:birch_fence_gate', 'minecraft:birch_door', 'minecraft:birch_trapdoor', 'minecraft:birch_pressure_plate', 'quark:birch_bookshelf', null, 'minecraft:spruce_boat', 'quark:vertical_birch_planks');
    wood(false, 'log', 'minecraft', 'jungle', 'minecraft:jungle_log', 'minecraft:stripped_jungle_log', 'minecraft:jungle_planks', 'minecraft:jungle_stairs', 'minecraft:jungle_slab', 'minecraft:jungle_fence', 'minecraft:jungle_fence_gate', 'minecraft:jungle_door', 'minecraft:jungle_trapdoor', 'minecraft:jungle_pressure_plate', 'quark:jungle_bookshelf', null, 'minecraft:jungle_boat', 'quark:vertical_jungle_planks');
    wood(false, 'log', 'minecraft', 'acacia', 'minecraft:acacia_log', 'minecraft:stripped_acacia_log', 'minecraft:acacia_planks', 'minecraft:acacia_stairs', 'minecraft:acacia_slab', 'minecraft:acacia_fence', 'minecraft:acacia_fence_gate', 'minecraft:acacia_door', 'minecraft:acacia_trapdoor', 'minecraft:acacia_pressure_plate', 'quark:acacia_bookshelf', null, 'minecraft:acacia_boat', 'quark:vertical_acacia_planks');
    wood(false, 'log', 'minecraft', 'dark_oak', 'minecraft:dark_oak_log', 'minecraft:stripped_dark_oak_log', 'minecraft:dark_oak_planks', 'minecraft:dark_oak_stairs', 'minecraft:dark_oak_slab', 'minecraft:dark_oak_fence', 'minecraft:dark_oak_fence_gate', 'minecraft:dark_oak_door', 'minecraft:dark_oak_trapdoor', 'minecraft:dark_oak_pressure_plate', 'quark:dark_oak_bookshelf', null, 'minecraft:dark_oak_boat', 'quark:vertical_dark_oak_planks');
    wood(false, 'stem', 'minecraft', 'crimson', 'minecraft:crimson_stem', 'minecraft:stripped_crimson_stem', 'minecraft:crimson_planks', 'minecraft:crimson_stairs', 'minecraft:crimson_slab', 'minecraft:crimson_fence', 'minecraft:crimson_fence_gate', 'minecraft:crimson_door', 'minecraft:crimson_trapdoor', 'minecraft:crimson_pressure_plate', 'quark:crimson_bookshelf', null, null, 'quark:vertical_crimson_planks');
    wood(false, 'stem', 'minecraft', 'warped', 'minecraft:warped_stem', 'minecraft:stripped_warped_stem', 'minecraft:warped_planks', 'minecraft:warped_stairs', 'minecraft:warped_slab', 'minecraft:warped_fence', 'minecraft:warped_fence_gate', 'minecraft:warped_door', 'minecraft:warped_trapdoor', 'minecraft:warped_pressure_plate', 'quark:warped_bookshelf', null, null, 'quark:vertical_warped_planks');

    wood(true, 'log', 'atmospheric', 'rosewood', 'atmospheric:rosewood_log', 'atmospheric:stripped_rosewood_log', 'atmospheric:rosewood_planks', 'atmospheric:rosewood_stairs', 'atmospheric:rosewood_slab', 'atmospheric:rosewood_fence', 'atmospheric:rosewood_fence_gate', 'atmospheric:rosewood_door', 'atmospheric:rosewood_trapdoor', 'atmospheric:rosewood_pressure_plate', 'atmospheric:rosewood_bookshelf', null, 'atmospheric:rosewood_boat', 'atmospheric:vertical_rosewood_planks');
    wood(true, 'log', 'atmospheric', 'morado', 'atmospheric:morado_log', 'atmospheric:stripped_morado_log', 'atmospheric:morado_planks', 'atmospheric:morado_stairs', 'atmospheric:morado_slab', 'atmospheric:morado_fence', 'atmospheric:morado_fence_gate', 'atmospheric:morado_door', 'atmospheric:morado_trapdoor', 'atmospheric:morado_pressure_plate', 'atmospheric:morado_bookshelf', null, 'atmospheric:morado_boat', 'atmospheric:vertical_morado_planks');
    wood(true, 'log', 'atmospheric', 'yucca', 'atmospheric:yucca_log', 'atmospheric:stripped_yucca_log', 'atmospheric:yucca_planks', 'atmospheric:yucca_stairs', 'atmospheric:yucca_slab', 'atmospheric:yucca_fence', 'atmospheric:yucca_fence_gate', 'atmospheric:yucca_door', 'atmospheric:yucca_trapdoor', 'atmospheric:yucca_pressure_plate', 'atmospheric:yucca_bookshelf', null, 'atmospheric:yucca_boat', 'atmospheric:vertical_yucca_planks');
    wood(true, 'log', 'atmospheric', 'kousa', 'atmospheric:kousa_log', 'atmospheric:stripped_kousa_log', 'atmospheric:kousa_planks', 'atmospheric:kousa_stairs', 'atmospheric:kousa_slab', 'atmospheric:kousa_fence', 'atmospheric:kousa_fence_gate', 'atmospheric:kousa_door', 'atmospheric:kousa_trapdoor', 'atmospheric:kousa_pressure_plate', 'atmospheric:kousa_bookshelf', null, 'atmospheric:kousa_boat', 'atmospheric:vertical_kousa_planks');
    wood(true, 'log', 'atmospheric', 'aspen', 'atmospheric:aspen_log', 'atmospheric:stripped_aspen_log', 'atmospheric:aspen_planks', 'atmospheric:aspen_stairs', 'atmospheric:aspen_slab', 'atmospheric:aspen_fence', 'atmospheric:aspen_fence_gate', 'atmospheric:aspen_door', 'atmospheric:aspen_trapdoor', 'atmospheric:aspen_pressure_plate', 'atmospheric:aspen_bookshelf', null, 'atmospheric:aspen_boat', 'atmospheric:vertical_aspen_planks');
    wood(true, 'log', 'atmospheric', 'grimwood', 'atmospheric:grimwood_log', 'atmospheric:stripped_grimwood_log', 'atmospheric:grimwood_planks', 'atmospheric:grimwood_stairs', 'atmospheric:grimwood_slab', 'atmospheric:grimwood_fence', 'atmospheric:grimwood_fence_gate', 'atmospheric:grimwood_door', 'atmospheric:grimwood_trapdoor', 'atmospheric:grimwood_pressure_plate', 'atmospheric:grimwood_bookshelf', null, 'atmospheric:grimwood_boat', 'atmospheric:vertical_grimwood_planks');

    wood(true, 'log', 'upgrade_aquatic', 'driftwood', 'upgrade_aquatic:driftwood_log', 'upgrade_aquatic:stripped_driftwood_log', 'upgrade_aquatic:driftwood_planks', 'upgrade_aquatic:driftwood_stairs', 'upgrade_aquatic:driftwood_slab', 'upgrade_aquatic:driftwood_fence', 'upgrade_aquatic:driftwood_fence_gate', 'upgrade_aquatic:driftwood_door', 'upgrade_aquatic:driftwood_trapdoor', 'upgrade_aquatic:driftwood_pressure_plate', 'upgrade_aquatic:driftwood_bookshelf', null, 'upgrade_aquatic:driftwood_boat', 'upgrade_aquatic:vertical_driftwood_planks');
    wood(true, 'log', 'upgrade_aquatic', 'river', 'upgrade_aquatic:river_log', 'upgrade_aquatic:stripped_river_log', 'upgrade_aquatic:river_planks', 'upgrade_aquatic:river_stairs', 'upgrade_aquatic:river_slab', 'upgrade_aquatic:river_fence', 'upgrade_aquatic:river_fence_gate', 'upgrade_aquatic:river_door', 'upgrade_aquatic:river_trapdoor', 'upgrade_aquatic:river_pressure_plate', 'upgrade_aquatic:river_bookshelf', null, 'upgrade_aquatic:river_boat', 'upgrade_aquatic:vertical_river_planks');

    wood(true, 'stem', 'endergetic', 'poise', 'endergetic:poise_stem', 'endergetic:stripped_poise_stem', 'endergetic:poise_planks', 'endergetic:poise_stairs', 'endergetic:poise_slab', 'endergetic:poise_fence', 'endergetic:poise_fence_gate', 'endergetic:poise_door', 'endergetic:poise_trapdoor', 'endergetic:poise_pressure_plate', 'endergetic:poise_pressure_plate', null, 'endergetic:poise_boat', 'endergetic:vertical_poise_planks');

    wood(true, 'log', 'biomesoplenty', 'fir', 'biomesoplenty:fir_log', 'biomesoplenty:stripped_fir_log', 'biomesoplenty:fir_planks', 'biomesoplenty:fir_stairs', 'biomesoplenty:fir_slab', 'biomesoplenty:fir_fence', 'biomesoplenty:fir_fence_gate', 'biomesoplenty:fir_door', 'biomesoplenty:fir_trapdoor', 'biomesoplenty:fir_pressure_plate', 'quarkoplenty:fir_bookshelf', null, 'biomesoplenty:fir_boat', 'quarkoplenty:vertical_fir_planks');
    wood(true, 'log', 'biomesoplenty', 'redwood', 'biomesoplenty:redwood_log', 'biomesoplenty:stripped_redwood_log', 'biomesoplenty:redwood_planks', 'biomesoplenty:redwood_stairs', 'biomesoplenty:redwood_slab', 'biomesoplenty:redwood_fence', 'biomesoplenty:redwood_fence_gate', 'biomesoplenty:redwood_door', 'biomesoplenty:redwood_trapdoor', 'biomesoplenty:redwood_pressure_plate', 'quarkoplenty:redwood_bookshelf', null, 'biomesoplenty:redwood_boat', 'quarkoplenty:vertical_redwood_planks');
    wood(true, 'log', 'biomesoplenty', 'cherry', 'biomesoplenty:cherry_log', 'biomesoplenty:stripped_cherry_log', 'biomesoplenty:cherry_planks', 'biomesoplenty:cherry_stairs', 'biomesoplenty:cherry_slab', 'biomesoplenty:cherry_fence', 'biomesoplenty:cherry_fence_gate', 'biomesoplenty:cherry_door', 'biomesoplenty:cherry_trapdoor', 'biomesoplenty:cherry_pressure_plate', 'quarkoplenty:cherry_bookshelf', null, 'biomesoplenty:cherry_boat', 'quarkoplenty:vertical_cherry_planks');
    wood(true, 'log', 'biomesoplenty', 'mahogany', 'biomesoplenty:mahogany_log', 'biomesoplenty:stripped_mahogany_log', 'biomesoplenty:mahogany_planks', 'biomesoplenty:mahogany_stairs', 'biomesoplenty:mahogany_slab', 'biomesoplenty:mahogany_fence', 'biomesoplenty:mahogany_fence_gate', 'biomesoplenty:mahogany_door', 'biomesoplenty:mahogany_trapdoor', 'biomesoplenty:mahogany_pressure_plate', 'quarkoplenty:mahogany_bookshelf', null, 'biomesoplenty:mahogany_boat', 'quarkoplenty:vertical_mahogany_planks');
    wood(true, 'log', 'biomesoplenty', 'jacaranda', 'biomesoplenty:jacaranda_log', 'biomesoplenty:stripped_jacaranda_log', 'biomesoplenty:jacaranda_planks', 'biomesoplenty:jacaranda_stairs', 'biomesoplenty:jacaranda_slab', 'biomesoplenty:jacaranda_fence', 'biomesoplenty:jacaranda_fence_gate', 'biomesoplenty:jacaranda_door', 'biomesoplenty:jacaranda_trapdoor', 'biomesoplenty:jacaranda_pressure_plate', 'quarkoplenty:jacaranda_bookshelf', null, 'biomesoplenty:jacaranda_boat', 'quarkoplenty:vertical_jacaranda_planks');
    wood(true, 'log', 'biomesoplenty', 'palm', 'biomesoplenty:palm_log', 'biomesoplenty:stripped_palm_log', 'biomesoplenty:palm_planks', 'biomesoplenty:palm_stairs', 'biomesoplenty:palm_slab', 'biomesoplenty:palm_fence', 'biomesoplenty:palm_fence_gate', 'biomesoplenty:palm_door', 'biomesoplenty:palm_trapdoor', 'biomesoplenty:palm_pressure_plate', 'quarkoplenty:palm_bookshelf', null, 'biomesoplenty:palm_boat', 'quarkoplenty:vertical_palm_planks');
    wood(true, 'log', 'biomesoplenty', 'willow', 'biomesoplenty:willow_log', 'biomesoplenty:stripped_willow_log', 'biomesoplenty:willow_planks', 'biomesoplenty:willow_stairs', 'biomesoplenty:willow_slab', 'biomesoplenty:willow_fence', 'biomesoplenty:willow_fence_gate', 'biomesoplenty:willow_door', 'biomesoplenty:willow_trapdoor', 'biomesoplenty:willow_pressure_plate', 'quarkoplenty:willow_bookshelf', null, 'biomesoplenty:willow_boat', 'quarkoplenty:vertical_willow_planks');
    wood(true, 'log', 'biomesoplenty', 'dead', 'biomesoplenty:dead_log', 'biomesoplenty:stripped_dead_log', 'biomesoplenty:dead_planks', 'biomesoplenty:dead_stairs', 'biomesoplenty:dead_slab', 'biomesoplenty:dead_fence', 'biomesoplenty:dead_fence_gate', 'biomesoplenty:dead_door', 'biomesoplenty:dead_trapdoor', 'biomesoplenty:dead_pressure_plate', 'quarkoplenty:dead_bookshelf', null, 'biomesoplenty:dead_boat', 'quarkoplenty:vertical_dead_planks');
    wood(true, 'log', 'biomesoplenty', 'magic', 'biomesoplenty:magic_log', 'biomesoplenty:stripped_magic_log', 'biomesoplenty:magic_planks', 'biomesoplenty:magic_stairs', 'biomesoplenty:magic_slab', 'biomesoplenty:magic_fence', 'biomesoplenty:magic_fence_gate', 'biomesoplenty:magic_door', 'biomesoplenty:magic_trapdoor', 'biomesoplenty:magic_pressure_plate', 'quarkoplenty:magic_bookshelf', null, 'biomesoplenty:magic_boat', 'quarkoplenty:vertical_magic_planks');
    wood(true, 'log', 'biomesoplenty', 'umbran', 'biomesoplenty:umbran_log', 'biomesoplenty:stripped_umbran_log', 'biomesoplenty:umbran_planks', 'biomesoplenty:umbran_stairs', 'biomesoplenty:umbran_slab', 'biomesoplenty:umbran_fence', 'biomesoplenty:umbran_fence_gate', 'biomesoplenty:umbran_door', 'biomesoplenty:umbran_trapdoor', 'biomesoplenty:umbran_pressure_plate', 'quarkoplenty:umbran_bookshelf', null, 'biomesoplenty:umbran_boat', 'quarkoplenty:vertical_umbran_planks');
    wood(true, 'log', 'biomesoplenty', 'hellbark', 'biomesoplenty:hellbark_log', 'biomesoplenty:stripped_hellbark_log', 'biomesoplenty:hellbark_planks', 'biomesoplenty:hellbark_stairs', 'biomesoplenty:hellbark_slab', 'biomesoplenty:hellbark_fence', 'biomesoplenty:hellbark_fence_gate', 'biomesoplenty:hellbark_door', 'biomesoplenty:hellbark_trapdoor', 'biomesoplenty:hellbark_pressure_plate', 'quarkoplenty:hellbark_bookshelf', null, 'biomesoplenty:hellbark_boat', 'quarkoplenty:vertical_hellbark_planks');

    wood(true, 'log', 'byg', 'aspen', 'byg:aspen_log', 'byg:stripped_aspen_log', 'byg:aspen_planks', 'byg:aspen_stairs', 'byg:aspen_slab', 'byg:aspen_fence', 'byg:aspen_fence_gate', 'byg:aspen_door', 'byg:aspen_trapdoor', 'byg:aspen_pressure_plate', 'byg:aspen_bookshelf', 'byg:aspen_crafting_table', 'byg:aspen_boat', null);
    wood(true, 'log', 'byg', 'baobab', 'byg:baobab_log', 'byg:stripped_baobab_log', 'byg:baobab_planks', 'byg:baobab_stairs', 'byg:baobab_slab', 'byg:baobab_fence', 'byg:baobab_fence_gate', 'byg:baobab_door', 'byg:baobab_trapdoor', 'byg:baobab_pressure_plate', 'byg:baobab_bookshelf', 'byg:baobab_crafting_table', 'byg:baobab_boat', null);
    wood(true, 'log', 'byg', 'blue_enchanted', 'byg:blue_enchanted_log', 'byg:stripped_blue_enchanted_log', 'byg:blue_enchanted_planks', 'byg:blue_enchanted_stairs', 'byg:blue_enchanted_slab', 'byg:blue_enchanted_fence', 'byg:blue_enchanted_fence_gate', 'byg:blue_enchanted_door', 'byg:blue_enchanted_trapdoor', 'byg:blue_enchanted_pressure_plate', 'byg:blue_enchanted_bookshelf', 'byg:blue_enchanted_crafting_table', 'byg:blue_enchanted_boat', null);
    wood(true, 'log', 'byg', 'cherry', 'byg:cherry_log', 'byg:stripped_cherry_log', 'byg:cherry_planks', 'byg:cherry_stairs', 'byg:cherry_slab', 'byg:cherry_fence', 'byg:cherry_fence_gate', 'byg:cherry_door', 'byg:cherry_trapdoor', 'byg:cherry_pressure_plate', 'byg:cherry_bookshelf', 'byg:cherry_crafting_table', 'byg:cherry_boat', null);
    wood(true, 'log', 'byg', 'cika', 'byg:cika_log', 'byg:stripped_cika_log', 'byg:cika_planks', 'byg:cika_stairs', 'byg:cika_slab', 'byg:cika_fence', 'byg:cika_fence_gate', 'byg:cika_door', 'byg:cika_trapdoor', 'byg:cika_pressure_plate', 'byg:cika_bookshelf', 'byg:cika_crafting_table', 'byg:cika_boat', null);
    wood(true, 'log', 'byg', 'cypress', 'byg:cypress_log', 'byg:stripped_cypress_log', 'byg:cypress_planks', 'byg:cypress_stairs', 'byg:cypress_slab', 'byg:cypress_fence', 'byg:cypress_fence_gate', 'byg:cypress_door', 'byg:cypress_trapdoor', 'byg:cypress_pressure_plate', 'byg:cypress_bookshelf', 'byg:cypress_crafting_table', 'byg:cypress_boat', null);
    wood(true, 'log', 'byg', 'ebony', 'byg:ebony_log', 'byg:stripped_ebony_log', 'byg:ebony_planks', 'byg:ebony_stairs', 'byg:ebony_slab', 'byg:ebony_fence', 'byg:ebony_fence_gate', 'byg:ebony_door', 'byg:ebony_trapdoor', 'byg:ebony_pressure_plate', 'byg:ebony_bookshelf', 'byg:ebony_crafting_table', 'byg:ebony_boat', null);
    wood(true, 'log', 'byg', 'ether', 'byg:ether_log', 'byg:stripped_ether_log', 'byg:ether_planks', 'byg:ether_stairs', 'byg:ether_slab', 'byg:ether_fence', 'byg:ether_fence_gate', 'byg:ether_door', 'byg:ether_trapdoor', 'byg:ether_pressure_plate', 'byg:ether_bookshelf', 'byg:ether_crafting_table', null, null);
    wood(true, 'log', 'byg', 'fir', 'byg:fir_log', 'byg:stripped_fir_log', 'byg:fir_planks', 'byg:fir_stairs', 'byg:fir_slab', 'byg:fir_fence', 'byg:fir_fence_gate', 'byg:fir_door', 'byg:fir_trapdoor', 'byg:fir_pressure_plate', 'byg:fir_bookshelf', 'byg:fir_crafting_table', 'byg:fir_boat', null);
    wood(true, 'log', 'byg', 'green_enchanted', 'byg:green_enchanted_log', 'byg:stripped_green_enchanted_log', 'byg:green_enchanted_planks', 'byg:green_enchanted_stairs', 'byg:green_enchanted_slab', 'byg:green_enchanted_fence', 'byg:green_enchanted_fence_gate', 'byg:green_enchanted_door', 'byg:green_enchanted_trapdoor', 'byg:green_enchanted_pressure_plate', 'byg:green_enchanted_bookshelf', 'byg:green_enchanted_crafting_table', 'byg:green_enchanted_boat', null);
    wood(true, 'log', 'byg', 'holly', 'byg:holly_log', 'byg:stripped_holly_log', 'byg:holly_planks', 'byg:holly_stairs', 'byg:holly_slab', 'byg:holly_fence', 'byg:holly_fence_gate', 'byg:holly_door', 'byg:holly_trapdoor', 'byg:holly_pressure_plate', 'byg:holly_bookshelf', 'byg:holly_crafting_table', 'byg:holly_boat', null);
    wood(true, 'log', 'byg', 'jacaranda', 'byg:jacaranda_log', 'byg:stripped_jacaranda_log', 'byg:jacaranda_planks', 'byg:jacaranda_stairs', 'byg:jacaranda_slab', 'byg:jacaranda_fence', 'byg:jacaranda_fence_gate', 'byg:jacaranda_door', 'byg:jacaranda_trapdoor', 'byg:jacaranda_pressure_plate', 'byg:jacaranda_bookshelf', 'byg:jacaranda_crafting_table', 'byg:jacaranda_boat', null);
    wood(true, 'log', 'byg', 'lament', 'byg:lament_log', 'byg:stripped_lament_log', 'byg:lament_planks', 'byg:lament_stairs', 'byg:lament_slab', 'byg:lament_fence', 'byg:lament_fence_gate', 'byg:lament_door', 'byg:lament_trapdoor', 'byg:lament_pressure_plate', 'byg:lament_bookshelf', 'byg:lament_crafting_table', null, null);
    wood(true, 'log', 'byg', 'mahogany', 'byg:mahogany_log', 'byg:stripped_mahogany_log', 'byg:mahogany_planks', 'byg:mahogany_stairs', 'byg:mahogany_slab', 'byg:mahogany_fence', 'byg:mahogany_fence_gate', 'byg:mahogany_door', 'byg:mahogany_trapdoor', 'byg:mahogany_pressure_plate', 'byg:mahogany_bookshelf', 'byg:mahogany_crafting_table', 'byg:mahogany_boat', null);
    wood(true, 'log', 'byg', 'mangrove', 'byg:mangrove_log', 'byg:stripped_mangrove_log', 'byg:mangrove_planks', 'byg:mangrove_stairs', 'byg:mangrove_slab', 'byg:mangrove_fence', 'byg:mangrove_fence_gate', 'byg:mangrove_door', 'byg:mangrove_trapdoor', 'byg:mangrove_pressure_plate', 'byg:mangrove_bookshelf', 'byg:mangrove_crafting_table', 'byg:mangrove_boat', null);
    wood(true, 'log', 'byg', 'maple', 'byg:maple_log', 'byg:stripped_maple_log', 'byg:maple_planks', 'byg:maple_stairs', 'byg:maple_slab', 'byg:maple_fence', 'byg:maple_fence_gate', 'byg:maple_door', 'byg:maple_trapdoor', 'byg:maple_pressure_plate', 'byg:maple_bookshelf', 'byg:maple_crafting_table', 'byg:maple_boat', null);
    wood(true, 'log', 'byg', 'nightshade', 'byg:nightshade_log', 'byg:stripped_nightshade_log', 'byg:nightshade_planks', 'byg:nightshade_stairs', 'byg:nightshade_slab', 'byg:nightshade_fence', 'byg:nightshade_fence_gate', 'byg:nightshade_door', 'byg:nightshade_trapdoor', 'byg:nightshade_pressure_plate', 'byg:nightshade_bookshelf', 'byg:nightshade_crafting_table', null, null);
    wood(true, 'log', 'byg', 'palm', 'byg:palm_log', 'byg:stripped_palm_log', 'byg:palm_planks', 'byg:palm_stairs', 'byg:palm_slab', 'byg:palm_fence', 'byg:palm_fence_gate', 'byg:palm_door', 'byg:palm_trapdoor', 'byg:palm_pressure_plate', 'byg:palm_bookshelf', 'byg:palm_crafting_table', 'byg:palm_boat', null);
    wood(true, 'log', 'byg', 'pine', 'byg:pine_log', 'byg:stripped_pine_log', 'byg:pine_planks', 'byg:pine_stairs', 'byg:pine_slab', 'byg:pine_fence', 'byg:pine_fence_gate', 'byg:pine_door', 'byg:pine_trapdoor', 'byg:pine_pressure_plate', 'byg:pine_bookshelf', 'byg:pine_crafting_table', 'byg:pine_boat', null);
    wood(true, 'log', 'byg', 'rainbow_eucalyptus', 'byg:rainbow_eucalyptus_log', 'byg:stripped_rainbow_eucalyptus_log', 'byg:rainbow_eucalyptus_planks', 'byg:rainbow_eucalyptus_stairs', 'byg:rainbow_eucalyptus_slab', 'byg:rainbow_eucalyptus_fence', 'byg:rainbow_eucalyptus_fence_gate', 'byg:rainbow_eucalyptus_door', 'byg:rainbow_eucalyptus_trapdoor', 'byg:rainbow_eucalyptus_pressure_plate', 'byg:rainbow_eucalyptus_bookshelf', 'byg:rainbow_eucalyptus_crafting_table', 'byg:rainbow_eucalyptus_boat', null);
    wood(true, 'log', 'byg', 'redwood', 'byg:redwood_log', 'byg:stripped_redwood_log', 'byg:redwood_planks', 'byg:redwood_stairs', 'byg:redwood_slab', 'byg:redwood_fence', 'byg:redwood_fence_gate', 'byg:redwood_door', 'byg:redwood_trapdoor', 'byg:redwood_pressure_plate', 'byg:redwood_bookshelf', 'byg:redwood_crafting_table', 'byg:redwood_boat', null);
    wood(true, 'log', 'byg', 'skyris', 'byg:skyris_log', 'byg:stripped_skyris_log', 'byg:skyris_planks', 'byg:skyris_stairs', 'byg:skyris_slab', 'byg:skyris_fence', 'byg:skyris_fence_gate', 'byg:skyris_door', 'byg:skyris_trapdoor', 'byg:skyris_pressure_plate', 'byg:skyris_bookshelf', 'byg:skyris_crafting_table', 'byg:skyris_boat', null);
    wood(true, 'log', 'byg', 'willow', 'byg:willow_log', 'byg:stripped_willow_log', 'byg:willow_planks', 'byg:willow_stairs', 'byg:willow_slab', 'byg:willow_fence', 'byg:willow_fence_gate', 'byg:willow_door', 'byg:willow_trapdoor', 'byg:willow_pressure_plate', 'byg:willow_bookshelf', 'byg:willow_crafting_table', 'byg:willow_boat', null);
    wood(true, 'log', 'byg', 'witch_hazel', 'byg:witch_hazel_log', 'byg:stripped_witch_hazel_log', 'byg:witch_hazel_planks', 'byg:witch_hazel_stairs', 'byg:witch_hazel_slab', 'byg:witch_hazel_fence', 'byg:witch_hazel_fence_gate', 'byg:witch_hazel_door', 'byg:witch_hazel_trapdoor', 'byg:witch_hazel_pressure_plate', 'byg:witch_hazel_bookshelf', 'byg:witch_hazel_crafting_table', 'byg:witch_hazel_boat', null);
    wood(true, 'log', 'byg', 'zelkova', 'byg:zelkova_log', 'byg:stripped_zelkova_log', 'byg:zelkova_planks', 'byg:zelkova_stairs', 'byg:zelkova_slab', 'byg:zelkova_fence', 'byg:zelkova_fence_gate', 'byg:zelkova_door', 'byg:zelkova_trapdoor', 'byg:zelkova_pressure_plate', 'byg:zelkova_bookshelf', 'byg:zelkova_crafting_table', 'byg:zelkova_boat', null);
    wood(true, 'stem', 'byg', 'bulbis', 'byg:bulbis_stem', 'byg:stripped_bulbis_stem', 'byg:bulbis_planks', 'byg:bulbis_stairs', 'byg:bulbis_slab', 'byg:bulbis_fence', 'byg:bulbis_fence_gate', 'byg:bulbis_door', 'byg:bulbis_trapdoor', 'byg:bulbis_pressure_plate', 'byg:bulbis_bookshelf', 'byg:bulbis_crafting_table', null, null);
    wood(true, 'stem', 'byg', 'sythian', 'byg:sythian_stem', 'byg:stripped_sythian_stem', 'byg:sythian_planks', 'byg:sythian_stairs', 'byg:sythian_slab', 'byg:sythian_fence', 'byg:sythian_fence_gate', 'byg:sythian_door', 'byg:sythian_trapdoor', 'byg:sythian_pressure_plate', 'byg:sythian_bookshelf', 'byg:sythian_crafting_table', null, null);
    wood(true, 'pedu', 'byg', 'embur', 'byg:embur_pedu', 'byg:stripped_embur_pedu', 'byg:embur_planks', 'byg:embur_stairs', 'byg:embur_slab', 'byg:embur_fence', 'byg:embur_fence_gate', 'byg:embur_door', 'byg:embur_trapdoor', 'byg:embur_pressure_plate', 'byg:embur_bookshelf', 'byg:embur_crafting_table', null, null);

});