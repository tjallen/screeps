var roleSpawnKiller = {

    /** @param {Creep} creep **/
    run: function(creep) {
        var targetRoom = Game.flags.KILL.pos.roomName
        ;
        // var goTime = 16372999;
        // if (Game.time < goTime) {
        //     creep.moveTo(Game.flags.Flag1);
        //     return;
        // }
        creep.memory.hasArrived = false;
        // creep.moveTo(new RoomPosition(37, 47, bullyValley))
        //return;
        var tt = new RoomPosition(44,38, 'E71S17')
        if (creep.room.name !== targetRoom) {
            var t = new RoomPosition(44,38, targetRoom);
            var e = creep.room.findExitTo(targetRoom);
            console.log(t,e)
            creep.moveTo(tt)
            console.log(creep.moveTo(t))
        } else {
            creep.memory.hasArrived = true;
        }
        if (creep.memory.hasArrived) {
            var spawns = creep.room.find(FIND_HOSTILE_SPAWNS);
            var creeps = creep.room.find(FIND_HOSTILE_CREEPS);
            var structures = creep.room.find(FIND_HOSTILE_STRUCTURES);
            if (spawns.length) {
                console.log('atk spawn')
                if (creep.attack(spawns[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(spawns[0])
                }
            } else if (creeps.length) {
                
                console.log('atk creep')
                var closestCrp = creep.pos.findClosestByRange(creeps);
                if (creep.attack(closestCrp) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(closestCrp);
                }
            } else {
                console.log('no crps')
                creep.moveTo(tt);
            }
            // else if (structures.length) {
            //     var closestStr = creep.pos.findClosestByRange(structures);
            //     console.log('atk str')
            //     if (creep.attack(closestStr) == ERR_NOT_IN_RANGE) {
            //         creep.moveTo(closestStr);
            //     }
            // }

        }

    }
}

module.exports = roleSpawnKiller;