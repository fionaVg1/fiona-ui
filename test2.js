function moveDiv() {
    this.sateList = [];
    this.nowState = 0;
}
moveDiv.prototype.move = function(type, num) {
    changeDiv(type, num);
    this.sateList.push({
        type: type,
        num: num
    });
    this.nowState = this.sateList.length - 1;
}
move.prototype.go = function() {
    var _state;
    if (this.nowSate < this.sateList.length - 1) {
        this.nowState++;
        _state = this.sateList[this.nowState];
        changeDiv(_state.type, _state.num);
    }
}