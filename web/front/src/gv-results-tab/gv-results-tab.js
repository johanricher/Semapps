Polymer({
  is: 'gv-results-tab',
  properties: {
    data: {
      type: Object,
      value: null
    },
    counter: {
      type: Number,
      value: 0,
      observer: '_counterChanged'
    }
  },

  attached() {
    "use strict";
    this.$counter = $(this.$$('.counter'));
    $.extend(this, this.data);
    gvc.results.tabRegister(this.type, this);
    this.refresh();
  },

  refresh() {
    "use strict";
    if (this.$counter) {
      this.$counter.toggle(this.counter);
    }
  },

  _counterChanged() {
    "use strict";
    this.refresh();
  },

  handleTabClick() {
    "use strict";
    gvc.results.selectType(this.type);
  }
});
