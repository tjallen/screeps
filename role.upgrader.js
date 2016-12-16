var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
      var sources = creep.room.find(FIND_SOURCES);
      var upgraderSource = sources[0];
        if(creep.memory.upgrading && creep.carry.energy == 0) {
            creep.memory.upgrading = false;
            creep.say('harvesting');
        }
        if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
            creep.memory.upgrading = true;
            creep.say('upgrading');
        }

        if(creep.memory.upgrading) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
        else {
            if (creep.harvest(upgraderSource) == ERR_NOT_IN_RANGE) {
                creep.moveTo(upgraderSource);
            }
        }
    }
};

module.exports = roleUpgrader;