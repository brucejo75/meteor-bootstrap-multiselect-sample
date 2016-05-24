let arr = [];
for(let i = 0; i < 6; i++) {
  let obj = {};
  obj.value = 'Value' + i;
  obj.caption = 'Option ' + i;
  obj.selected = false;
  arr[i] = obj;
}

Template.msExample.helpers({
  'myMenuItems': function selectedItems() {
    return arr;
  },
  'mySelectedList': function selectedList() {
    let retVal = arr.filter(function aFilter(elem) {return elem.selected;})
    .map(function aMap(elem) {return elem.value;});
    return retVal ? retVal : [];
  },
  'myConfigOptions': function configOptions() {
    return {
      'nonSelectedText': 'Check option',
      'buttonClass': 'btn btn-primary',
      'onChange': function onChange(option, checked) {
        let index = $(option).val();
        console.log('Changed option ' + index + '. checked: ' + checked);
        arr.indexOf(index).selected = checked;
      }
    };
  }
});
