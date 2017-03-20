class Spaceship {

  constructor(name, crew, phasers, shields, cloaked= false, warpDrive = 'disengaged', phasersCharge = 'uncharged') {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = cloaked;
    this.warpDrive = warpDrive;
    this.phasersCharge = phasersCharge

    if (crew.length == 0) {
      this.docked = true;
    } else {
      this.docked = false;
    }

    if (crew.length >0) {
      crew.forEach((crew)=> {crew.currentShip = this})
    }
  }

  engageWarpDrive() {
    return 'had no effect'
  }

  etsInvisibility() {
    return 'had no effect'
  }

  chargePhasers() {
    return 'had no effect'
  }
}
