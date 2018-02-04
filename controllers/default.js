exports.install() = function(){
  F.route('/index', view_index);
};

view_index = function(){
  var self = this;
  self.view('index');
};
