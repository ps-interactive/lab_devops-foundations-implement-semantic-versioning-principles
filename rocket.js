// HOTFIX / PATCH: change operator on payload check in add Payload
// MINOR: add deployPayload method
// MINOR: throw exception in add payload
// MAJOR: Migrate getCurrentPayload to a property implementation

class Rocket {
  constructor(name, stages, payloadCapacity) {
    this.name = name;
    this.stages = stages;
    this.payloadCapacity = payloadCapacity;
    this.currentPayload = 0;
  }

  addPayload(payload) {
    if (this.currentPayload + payload < this.payloadCapacity) {
      this.currentPayload += payload;
    }
  }

  /*deployPayload() {
    this.currentPayload = 0; 
  }*/

  getCurrentPayload() {
    return this.currentPayload;
  }
}
