let store = {spaceships:[],crewmembers:[]}

class Spaceship {
    constructor(name, crewmembers, phasers, shields) {

      this.name = name
      this.phasers = phasers
      this.shields = shields
      this.cloaked = false
      this.warpDrive = "disengaged"
      this.docked = false
      if (crewmembers.length === 0){
        this.docked = true
      }
      this.phasersCharge = "uncharged"
      // this.crewmembers = crewmembers
      this.id = store.spaceships.push(this)
      crewmembers.forEach((crewmember)=>{
        crewmember.currentShip = this
      })
    }
  }


class CrewMember {
  constructor(position){
    this.position = position
    this.currentShip = 'Looking for a Rig'
    this.id = store.crewmembers.push(this)
  }

  engageWarpDrive(){
    if (this.currentShip !== 'Looking for a Rig' && this.position === "Pilot"){
      this.currentShip.warpDrive = "engaged!"
    } else{
      return "had no effect"
    }
  }

  setsInvisibility(){
    if (this.currentShip !== 'Looking for a Rig' && this.position === "Defender"){
      this.currentShip.cloaked = true
    } else {
      return "had no effect"
    }
  }

  chargePhasers(){
    if (this.currentShip !== 'Looking for a Rig' && this.position === "Gunner"){
        this.currentShip.phasersCharge = 'charged!'
    }else{
      return "had no effect"
    }
  }
}
