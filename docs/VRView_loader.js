window.addEventListener('load', onVrViewLoad);

function onVrViewLoad() {
  // Selector '#vrview' finds element with id 'vrview'.
  var vrView = new VRView.Player('#vrview', {
    image: 'https://github.com/edurbf/Home/blob/master/docs/good_color_sphere.png',
    is_stereo: true
  });
}
