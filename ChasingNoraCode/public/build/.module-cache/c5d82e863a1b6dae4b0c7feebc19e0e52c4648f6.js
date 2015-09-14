var Gallery = React.createClass({displayName: "Gallery",

  initialState: function () {
    return {};
  },
  render: function() {
    var picHeight = this.state.picHeight || 0;

    return (
        React.createElement("div", {className: "creamBack white textCenter bigBelle"}, 
            React.createElement("div", {className: "pictureGallery"}, 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPicStart"}, 
                            React.createElement("img", {src: "/squares/square1.jpg", className: "galleryPic seaFoamBack img-responsive", height: picHeight})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPic"}, 
                            React.createElement("img", {src: "/squares/square2.jpg", className: "galleryPic seaFoamBack img-responsive", height: picHeight})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPic"}, 
                            React.createElement("img", {src: "/squares/square3.jpg", className: "galleryPic seaFoamBack img-responsive", height: picHeight})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPicEnd"}, 
                            React.createElement("img", {src: "/squares/square4.jpg", className: "galleryPic seaFoamBack img-responsive", height: picHeight})
                        )
                    )
                ), 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPicStart"}, 
                            React.createElement("img", {src: "/squares/square5.jpg", className: "galleryPic seaFoamBack img-responsive", height: picHeight})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPic"}, 
                            React.createElement("img", {src: "/squares/square6.jpg", className: "galleryPic seaFoamBack img-responsive", height: picHeight})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPic"}, 
                            React.createElement("img", {src: "/squares/square7.jpg", className: "galleryPic seaFoamBack img-responsive", height: picHeight})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPicEnd"}, 
                            React.createElement("img", {src: "/squares/square8.jpg", className: "galleryPic seaFoamBack img-responsive", height: picHeight})
                        )
                    )
                ), 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPicStart"}, 
                            React.createElement("img", {src: "/squares/square9.jpg", className: "galleryPic seaFoamBack img-responsive", height: picHeight})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPic"}, 
                            React.createElement("img", {src: "/squares/square10.jpg", className: "galleryPic seaFoamBack img-responsive", height: picHeight})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPic"}, 
                            React.createElement("img", {src: "/squares/square11.jpg", className: "galleryPic seaFoamBack img-responsive", height: picHeight})
                        )
                    ), 
                    React.createElement("div", {className: "col-sm-3"}, 
                        React.createElement("div", {className: "innerPicEnd"}, 
                            React.createElement("img", {src: "/squares/square12.jpg", className: "galleryPic seaFoamBack img-responsive", height: picHeight})
                        )
                    )
                )
            )
        )
    );
  },
  componentDidMount: function() {
    var $root = $(this.getDOMNode());
    var width = root.find('.innerPic').width();
    this.setState({picHeight: width});
  }
});






