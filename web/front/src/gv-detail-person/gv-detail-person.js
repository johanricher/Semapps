Polymer({
  is: 'gv-detail-person',
  properties: {},
    handleClickDetail(e) {
        e.preventDefault();
        gvc.goToPath('detail', {
            uri: window.encodeURIComponent(e.currentTarget.getAttribute('rel'))
        });
    },
  attached() {
    GVCarto.ready(() => {
      gvc.initElementGlobals(this);
    });
    // Raw values.
    $.extend(this, this.data.properties);
    this.memberOf = this.data.memberOf;
    this.topicInterest = this.data.topicInterest;
    this.resourceNeeded = this.data.resourceNeeded;
    this.resourceProposed = this.data.resourceProposed;
    this.expertize = this.data.expertize;
    this.knows = this.data.knows;
    if (this.birthday) {
      let birthday = new Date(this.birthday);
      this.birthday = birthday.getDate() + '/' + (birthday.getMonth() + 1) + '/' + birthday.getFullYear();
    }
  }
});
