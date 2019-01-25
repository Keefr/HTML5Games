(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"../images/lv1.png", id:"lv1"},
		{src:"../images/lv2.png", id:"lv2"},
		{src:"../images/lv3.png", id:"lv3"},
		{src:"../images/lv4.png", id:"lv4"},
		{src:"../images/lv5.jpg", id:"lv5"},
		{src:"../images/lv6.jpg", id:"lv6"}
	]
};

// stage content:
(lib.assets = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ScoreBoard();
	this.instance.setTransform(215,197.4,1,1,0,0,0,76.9,17.8);

	// Layer 1
	this.instance_1 = new lib.LevelSelection();
	this.instance_1.setTransform(344.6,298.8);

	// Layer 1
	this.instance_2 = new lib.BouncyBall();
	this.instance_2.setTransform(408.2,88.7);

	this.instance_3 = new lib.PowerArrow();
	this.instance_3.setTransform(180,94.9);

	this.instance_4 = new lib.HoopSensor();
	this.instance_4.setTransform(56.9,98);

	this.instance_5 = new lib.BrownSquare();
	this.instance_5.setTransform(361.7,71.9);

	this.instance_6 = new lib.Cross();
	this.instance_6.setTransform(490,97.6);

	this.instance_7 = new lib.HoopBoard();
	this.instance_7.setTransform(23.4,57.3);

	this.instance_8 = new lib.HoopSquare();
	this.instance_8.setTransform(28.4,97.3);

	this.instance_9 = new lib.SlowBall();
	this.instance_9.setTransform(411.2,132.3);
	this.instance_9.cache(-16,-16,32,32);

	this.addChild(this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(292.9,216.8,806.7,642.1);


// symbols:
(lib.lv1 = function() {
	this.initialize(img.lv1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,894,668);


(lib.lv2 = function() {
	this.initialize(img.lv2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,924,688);


(lib.lv3 = function() {
	this.initialize(img.lv3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,918,652);


(lib.lv4 = function() {
	this.initialize(img.lv4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,904,660);


(lib.lv5 = function() {
	this.initialize(img.lv5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,912,678);


(lib.lv6 = function() {
	this.initialize(img.lv6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,920,696);


(lib.SlowBall = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC6633").ss(1,1,1).p("Ag8BzQgQgJgOgOQgngmAAg2QAAg0AngmQAOgOAQgJQAcgQAgAAQAhAAAcAPQAQAJAPAPQAmAmAAA0QAAA2gmAmQgPAOgRAJQgbAPghAAQggAAgcgPgAA9hyIgBDlAg8hxIAADk");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C27400").s().p("AA9hyQAQAJAPAPQAmAmgBA0QABA1gmAnQgPAOgRAJgAhaBcQgngnABg1QgBg0AngmQAOgOAQgJIAADjQgQgIgOgOg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("Ag8BzIAAjkQAcgPAgAAQAhAAAcAOIgBDlQgbAPghgBQggAAgcgOg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14,-14,28,28);


(lib.ScoreBoard = function() {
	this.initialize();

	// Layer 1
	this.textField = new cjs.Text("0", "bold 19px 'Arial'", "#333333");
	this.textField.name = "textField";
	this.textField.lineHeight = 23;
	this.textField.lineWidth = 35;
	this.textField.setTransform(8.6,3.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("AESCJQAAAGgCAFQgCAFgEAAIhkgBQgmgBgdACIghABQhAABiEABQgWgDgMAAIhkAAQgDAAgDgFQgDgEAAgHIAAhBQgChJAChKIAAhCQAAgGADgEQADgEADAAIISAAQAEAAACAEQACAEAAAGIAABCQgBAZABAxQACAugCAbg");
	this.shape.setTransform(27.5,15.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFCE2").s().p("AikCZIhkAAQgDAAgDgFQgDgEAAgHIAAhBQgChJAChKIAAhCQAAgGADgEQADgEADAAIISAAQAEAAACAEQACAEAAAGIAABCQgBAZABAxQACAugCAbIAABBQAAAGgCAFQgCAFgEAAIhkgBQgmgBgdACIghABIjEACQgWgDgMAAg");
	this.shape_1.setTransform(27.5,15.7);

	this.addChild(this.shape_1,this.shape,this.textField);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,57.1,34.6);


(lib.RightButton = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("AB8gBIj3i+IAAF/ID3i+g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFCE2").s().p("Ah7i/ID3C+IAAADIj3C+g");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.4,-20.2,27,40.6);


(lib.PowerBar = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AgvAKIAAgSIBfAAIAAASg");
	this.shape.setTransform(0,-1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.8,-2,9.8,2);


(lib.PlayButton = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Play Level", "26px 'Andola'");
	this.text.lineHeight = 32;
	this.text.setTransform(-70.6,-11.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("ANCDbQAAAKgGAGQgHAHgKAAQhAAAjxgCQiHgBhvADQjZAFkQgBQlHgDjCgBIg8AAQgJAAgIgHQgGgGAAgKIAAhlQAEhOgBhAQgDiJAAg0QAAgKAGgGQAHgHAKAAIBrAAQC/gNFpAFQFwAGBbgGQDZABB+ADQCAAEAgAAQAKAAAHAHQAGAHAAAJIAABlQgEBOABBAQADCKAAAzg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFCE2").s().p("AjlD2IoJgEIg8AAQgJAAgIgHQgGgGAAgKIAAhlQAEhOgBhAQgDiJAAg0QAAgKAGgGQAHgHAKAAIBrAAQC/gNFpAFQFwAGBbgGQDZABB+ADICgAEQAKAAAHAHQAGAHAAAJIAABlQgEBOABBAQADCKAAAzQAAAKgGAGQgHAHgKAAIkxgCQiHgBhvADQi4AEjeAAIhTAAg");

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.4,-26.9,169,56.1);


(lib.Levels = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lv1();
	this.instance.setTransform(-168.4,-70.2,0.21,0.21);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(100.4,-42.1);

	this.instance_1 = new lib.lv2();
	this.instance_1.setTransform(-168.4,-70.2,0.203,0.203);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(100.4,-42.4);

	this.instance_2 = new lib.lv3();
	this.instance_2.setTransform(-168.4,-70.2,0.205,0.205);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AJSEDQgFgCgCgCQgDgDgCgFQgBgEAAgGIABgKIABABIAQADIgBANIAMABIADgYIgehkIAZgBIALApIADAXIAFAAQAFgcAGgmIARADIgNA7IgMAyQgDATgJAHQgFAFgKAAQgFgBgEgBgAj0EDQgFgCgDgCQgDgDgBgFQgCgEAAgGIACgKIABABIAPADIgBANIANABIADgYIgehkIAYgBIALApIADAXIAFAAQAGgcAGgmIARADIgOA7IgLAyQgEATgIAHQgGAFgJAAQgGgBgDgBgAioECIgCiEIAPABIADAKQAGgLAEgDIAIgEQAEgBAFAAQAJAAAGADQAGAEAFAHQAEAGACAHQACAIAAAIQAAAOgCAKQgDAKgEAHQgEAHgHAEQgHADgIAAQgGAAgLgGIAAAygAiUDDIAfgCIAAguIgfAAgACODZIgdgBIABiIQAYgBAXAAQAJAAAHABQAHABAEAEQAHAEADAGQADAGAAAIQAAAZgYAKIAAAGQAHABAGADQAFADAEAEQAEAFACAFQACAGAAAHQAAAJgDAGQgCAHgFAEQgEAEgHADQgHACgIAAIgdgCgACQDLIAhgDIAAgpIgigBgACGCMIAjgCIABgpIgjAAgApwDZIgegBIACiIQAYgBAXAAQAIAAAIABQAGABAFAEQAHAEADAGQACAGAAAIQAAAZgXAKIAAAGQAHABAFADQAGADAEAEQAEAFACAFQACAGAAAHQgBAJgCAGQgCAHgFAEQgFAEgGADQgHACgIAAIgdgCgApuDLIAhgDIgBgpIghgBgAp4CMIAigCIACgpIgjAAgAIJDXQgHgEgGgIQgFgHgDgJQgCgJAAgJQAAgLACgIQACgJAEgHQAFgIAIgEQAHgEALAAQAIAAAHADQAHACAFAGQAFAFAEAIQACAHAAAIIgWgBIgBgTIgaACIgBAdQAAAPABAMIAMACQAJgBACgBIABgMIAYAAQgBAJgCAGQgCAGgFAFQgEAFgHACQgGADgIAAQgKAAgIgEgADyDXQgHgFgGgJQgEgHgCgJQgCgJAAgKQAAgJACgJQACgIAEgGQAFgIAHgEQAHgEAKAAQAEAAAFABQAFABADADIAIAGIAFAIQAEAIADAJQACAJAAALQAAAJgCAHQgDAIgFAHQgGAHgGAEQgIADgIAAQgKAAgHgEgAD2CNIgFAxIAMAEQAHACAIAAIAFAAIgEg6gAg2DXQgIgDgFgIQgGgGgBgJQgDgIAAgLQAAgKACgJQACgJAEgHQAGgIAHgEQAIgFAJAAQAGAAAEABIAIAEIACABIAAAxIgkACIABAZIAbAAIABgKIAHAAIARgBQgBAHgEAFQgCAGgEAEIgGAEIAAgZIAAAZIgFACQgGACgHAAQgJAAgIgEgAgzCIIAAAaIAcAAIgCgbgAkoDZQgEgCgEgCQgDgDgCgFQgCgEAAgGIAAgNQAAgJAEgeIgMgCIABgPIALAAIAKgfIALgBIgBAcIAWABIgBAVIgWAAIgBA3IASAAIgBgMIAKAAIAAAJIAAAKQgCAFgDACQgDADgEABQgFACgGAAQgGAAgFgCgAoYDZQgEgCgDgCQgCgDgCgEQgBgFgBgFQAAgHACgIQADgJAFgDQAEgDAMgDQALgCAUgCIgBgTQgQgFgFAAIgEAAIgDAAIgBAMIgMgBIgKABQAAgHADgFQACgGAHgDIALgGQAHgCAHAAQAJAAAGACQAHACAFAFQAEAEACAHQACAGAAAJIAAAcQABAVACANIgIAAIgPACIgEgMQgIAHgHAEQgIADgHAAQgGAAgEgCgAn/CuIgNAFIAAAWIAZgCIABgaIgNABgAFIDYQgFgDgDgFQgDgDgCgGIgBgMIgBg/QALABAPAAIgCBGIAbAAIAAhJIAYABIAABXIgSgBIgBgKQgIAJgGAGQgIAEgIAAQgGAAgFgCgAHIDYIABgkIgCgjIgZACIABAgIgBAgIgVACIAAhXIARABIACANQAJgKAJgFQAIgFAIAAQAFAAAFADQAEADACAFQADAGAAAPIgBBAgAmWDVIAAiJIAZACIgBCIgAnDDVIAAiJIAZACIgBCIgAAYDTQgEgBgCgDQgFgFAAgJQAAgJAEgFQAEgFAJAAQAEAAACABQAEADACADQADAGAAAJQAAAFgEAGQgFAGgFAAQgFAAgCgCgAgTCtIAAgxIAFAEIAFAIQAJAOAAAWIgTABgAASCWQgFgFABgJQAAgJADgEQAEgFAIAAQAIAAAEAGQAEAFAAAIQAAAIgEAIQgDACgHAAQgJABgEgGgAgTB8IAAAAgACig6QgNgDgIgGQgFgDgDgFQgEgEgDgHQgDgHgCgVIABgHIA3ACIgCAeIAnAAIgDgtIgpgEIADgkIAfAAIAEgpIgkgEIgCAhIgwgDQAAgMAEgSQAGgNAJgJQAJgJANgFQAJgDAVgBQAPAAANADQAMADAIAIQAJAIAGALQAEALAAAQQAAAHgCAHQgDAGgFAFQgDAFgGADIgPAHQALACAHAFQAIAEAGAFQAEAGADAHQADAIAAAJQAAAIgBAGQgCAHgDAFQgDAGgEAEIgLAJQgKAHgNADQgNADgPAAQgSAAgNgDgAikg8QgOgEgKgJIgKgKQgDgFgDgHQgDgHgBgGIgBgQQAAgLAEgTIAGgMQAEgGAFgFIAKgJIANgGQAJgDAVgCQAIAAAJABQAHACAHADIANAHIAKAKIAIAMIAFANQAEAUABANQgsgBg2ADIAAAHIACATIAqAAIABgOIAygBQgCAMgGAJQgFAKgKAFQgIAGgLADQgLADgNAAQgRAAgNgFgAiailIAAAZIAoAAIgDgagAnJg8QgOgEgJgJIgKgKQgEgFgDgHQgDgHgBgGIgCgQQAAgLAGgTIAFgMQAEgGAFgFIALgJIAMgGQAJgDAUgCQAKAAAHABQAIACAIADIAMAHIAKAKIAIAMIAFANQAFAUgBANQgrgBg2ADIAAAHIADATIAoAAIACgOIAygBQgCAMgGAJQgFAKgKAFQgJAGgLADQgKADgNAAQgQAAgOgFgAm/ilIAAAZIAoAAIgCgagAqJg+IADhiIgBhaIA8gBIgBCTIBMgBIgCAugAgTg/IAAi9IAbABIgBC+gAgqhAQAChBgCh8IAXABIAAC9gAk2hAIgoiAIA1gCQADASAFAdIAKAvQAFgXAUhCIAlAAQgEARgJAYQgWA2gKAeg");
	this.shape_2.setTransform(100.1,-42.4);

	this.instance_3 = new lib.lv4();
	this.instance_3.setTransform(-168.4,-70.2,0.208,0.208);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("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");
	this.shape_3.setTransform(100.4,-42.5);

	this.instance_4 = new lib.lv5();
	this.instance_4.setTransform(-168.4,-70.2,0.206,0.206);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Aj3EAQgFgBgCgCQgDgDgCgFQgBgEAAgGIABgKIABABIAPACIgBAOIANABIADgZIgehjIAZgBIAKAoIAEAYIAEAAQAGgdAGglIARADIgOA7IgLAxQgDATgJAIQgFAEgKAAQgFAAgEgCgAiqD/IgDiEIAPACIADAKQAGgLAFgEIAHgDQAEgBAGAAQAIAAAGADQAHAEAEAGQAEAHACAHQACAHAAAIQAAAOgCAKQgDAKgEAIQgEAGgHAEQgGADgJAAQgGAAgLgFIAAAxgAiXDAIAfgBIAAguIgfAAgApzDXIgegCIACiIQAYgBAXAAQAJAAAHABQAGACAFAEQAHAEADAFQADAGAAAJQAAAZgYAKIAAAFQAHABAGAEQAFACAEAEQAEAFACAFQACAGAAAIQAAAIgDAHQgCAGgFAFQgEAEgHADQgHACgIAAIgdgCgApxDIIAhgCIgBgqIghgBgAp7CJIAigBIACgqIgjAAgAIkDXQgEgCgDgDQgDgDgBgEQgCgEAAgGQAAgGACgIQADgKAFgDQAEgDAMgCQALgDAUgCIgBgTQgRgFgFAAIgDAAIgDAAIgBANIgNgBIgKABQAAgHADgGQADgFAGgEIAMgFQAHgCAHAAQAJAAAGACQAHACAEAFQAFAEACAHQACAGAAAIIgBAdQABAUACANIgHAAIgPADIgEgNQgIAIgHADQgIADgIABQgFAAgEgCgAI9CsIgNAEIAAAXIAYgCIABgaIgMABgAD2DUQgHgFgGgIQgEgIgCgJQgCgIAAgKQAAgKACgIQACgJAEgGQAFgIAHgEQAHgDAKAAQAFAAAEABQAFABADACIAIAHIAGAIQAEAHACAKQADAJAAALQAAAIgDAIQgDAIgFAGQgFAHgHAEQgHADgJABQgJgBgIgEgAEVDBIgEg5IgXACIgEAyIAMADQAGACAIAAIAFAAgAg5DUQgIgDgFgIQgFgGgCgJQgDgIAAgLQAAgKACgJQACgIAFgIQAFgIAHgEQAIgFAJABQAGAAAEABIAIADIAHAGIAGAIQAIAOAAAWQgYAAgfADIACAZIAbAAIABgKIAXgCQgBAIgDAFQgDAGgEAEQgFADgGADQgFACgHAAQgKAAgIgFgAgaCfIgBgaIgaABIAAAZIAbAAgAkqDXQgFgCgDgDQgEgDgCgFQgCgEAAgGIAAgMQAAgJAEgfIgMgCIABgPIAMABIAKggIAKAAIgBAbIAWABIgBAVIgWAAIgBA4IASAAIgBgNIALAAIAAAJIgBAKQgCAFgDACQgDADgEACQgFABgGABQgGAAgEgCgAobDXQgEgCgDgDQgCgDgCgEQgBgEAAgGQAAgGACgIQACgKAFgDQAEgDAMgCQAMgDATgCIgBgTQgQgFgFAAIgEAAIgDAAIAAANIgNgBIgKABQAAgHADgGQADgFAGgEIAMgFQAGgCAHAAQAJAAAHACQAGACAFAFQAEAEACAHQACAGAAAIIAAAdQABAUACANIgHAAIgQADIgEgNQgHAIgIADQgHADgIABQgFAAgFgCgAoBCsIgOAEIAAAXIAZgCIABgaIgMABgABvDUIACiJIAfAAIAgBFQAEAJAEAPIAEgBIgChXIAUAAIgBCDIgdAAIgXgvQgIgTgKgdIgEABIgBBfgAJ4DSIABiIIAZABIgBCIgAHwDSIAAgCIAAgQQAAgZgCgZIgYgBIAABEIgagBIAAhAIgZABIgBBAIgYACIABgoIgBgxIATAAIABARQAGgLAFgFQAEgEAFgBQAEgCAFAAQAFAAAEACQADABADADQAEAGAEAJQAFgLAFgFQADgCAFgBIAKgBQAZgBABAgIAAA/gAE+DQIABg8IAAgaIAQAAIABAMIAEABQADgKAFgFQAFgEAIAAQAFAAADACQAEABACADQACAEABAEQACAGAAAGIgBATIgUAAIAAgWIgSAAIADBIQgSgDgIAAgAmZDSIAAiIIAZABIgBCIgAnGDSIAAiIIAZABIgBCIgAAVDRQgEgCgCgDQgFgFAAgIQAAgKAEgFQAFgFAIABQAEgBADACQADACACAEQADAFAAAJQAAAGgEAFQgEAGgGAAQgEAAgDgBgAAPCTQgEgEAAgJQAAgJAEgFQADgEAIAAQAIgBAEAGQAEAFAAAJQAAAHgEAIQgCADgIAAQgIAAgFgGgACng9QgNgEgKgGIgKgJQgEgFgDgGQgDgGgBgHQgCgGAAgIIA3gDIAAAeIALAAQAOAAALgCIAAg2IgtgBIgEALIgngCIAHh2IA9ADIA6gDQgDAXgBAUIgTABIg/gCIgCAnQAJgGAKgEQAKgDANAAQAOAAAMAEQAMAFAJAIQAJAIAEAMQAFALAAAOIgBAPQgCAHgDAGQgCAGgFAGIgJAKQgLAKgMAFQgNAEgPAAQgQAAgNgDgAing+QgNgFgKgJIgKgKQgEgFgDgGQgDgHgBgHIgBgQQAAgKAFgUIAGgLQADgHAFgEIALgJIAMgGQAJgEAVgCQAJAAAIACQAIACAHACIAMAIIAKAKIAIALIAFAOQAFAUAAAMQgsAAg1ADIAAAGIACATIApABIABgOIAygBQgCALgGAJQgFAKgKAGQgIAGgLADQgLACgNAAQgQAAgOgEgAh1iOIgCgaIgmABIAAAZIAoAAgAnMg+QgNgFgKgJIgKgKQgEgFgDgGQgDgHgBgHIgBgQQAAgKAFgUIAGgLQADgHAFgEIALgJIAMgGQAJgEAVgCQAJAAAIACQAIACAHACIAMAIIAKAKIAIALIAFAOQAFAUAAAMQgsAAg1ADIAAAGIACATIApABIABgOIAygBQgCALgGAJQgFAKgKAGQgIAGgLADQgLACgNAAQgQAAgOgEgAmaiOIgCgaIgmABIAAAZIAoAAgAqLhBIADhhIgBhaIA7gCIgBCUIBNgBIgCAugAgthDQAChBgBh8IAyACIgCC+gAk5hDIgoh/IA2gCQACASAGAdIAKAuQAEgXAUhCIAlAAQgEARgJAZQgWA1gKAeg");
	this.shape_4.setTransform(100.4,-42.1);

	this.instance_5 = new lib.lv6();
	this.instance_5.setTransform(-168.4,-70.2,0.204,0.204);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("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");
	this.shape_5.setTransform(100.4,-42.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance_1}]},1).to({state:[{t:this.shape_2},{t:this.instance_2}]},1).to({state:[{t:this.shape_3},{t:this.instance_3}]},1).to({state:[{t:this.shape_4},{t:this.instance_4}]},1).to({state:[{t:this.shape_5},{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.4,-70.2,334.6,140.4);


(lib.LeftButton = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("Ah8ACID5C+IAAl/Ij5C+g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFCE2").s().p("Ah8ACIAAgDID5i+IAAF/g");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.5,-20.2,27,40.6);


(lib.HoopSquare = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C27400").s().p("AgxAyIAAhjIBjAAIAABjg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,-5,10,10);


(lib.HoopSensor = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,255,0,0.62)").s().p("AjGAdIAAg5IGNAAIAAA5g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20,-3,40,6);


(lib.HoopBoard = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC6633").ss(1,1,1).p("AgxmOIBjAAIAAMdIhjAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C27400").s().p("AgxGPIAAsdIBjAAIAAMdg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6,-41,12,82);


(lib.Cross = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC6633").ss(1,1,1).p("ApXhjISvAAIAADHIyvAAg");
	this.shape.setTransform(0,0,1,1,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC33").s().p("ApXBjIAAjFISvAAIAADFg");
	this.shape_1.setTransform(0,0,1,1,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CC6633").ss(1,1,1).p("ApXhjISvAAIAADHIyvAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC33").s().p("ApXBjIAAjFISvAAIAADFg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-61,-61,122,122);


(lib.BrownSquare = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC6633").ss(1,1,1).p("AhjhjIDHAAIAADHIjHAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663333").s().p("AhiBjIAAjFIDFAAIAADFg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11,-11,22,22);


(lib.BouncyBall = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("AguhXQAVgMAZAAQAaAAAVAMQANAHALALQAdAdAAAoQAAApgdAeQgLALgNAHQgVALgaAAQgZAAgVgMQgMgGgLgLQgegeAAgpQAAgoAegdQALgLAMgHIAACvAAvhXIAACw");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AguBYIAAivQAVgMAZABQAaAAAVALIAACwQgVALgagBQgZAAgVgLg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AAuhXQAOAHALALQAdAdgBAoQABApgdAeQgLALgOAGgAhFBHQgegeABgpQgBgoAegdQALgLAMgHIAACvQgMgHgLgKg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11,-11,22,22);


(lib.PowerArrow = function() {
	this.initialize();

	// Layer 1
	this.powerBar = new lib.PowerBar();
	this.powerBar.setTransform(10.2,0.3,1,1,90);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,255,0,0.4)").s().p("ACoCJIpMAAIAAkRIJMAAIAAiaID9EiIj9EjgAk+AzIHjAAIAAhfInjAAg");
	this.shape.setTransform(42.2,0);

	this.addChild(this.shape,this.powerBar);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-29.2,84.3,58.4);


(lib.LevelSelection = function() {
	this.initialize();

	// Layer 1
	this.levels = new lib.Levels();
	this.levels.setTransform(239.9,171.9);

	// Layer 1
	this.playButton = new lib.PlayButton();
	this.playButton.setTransform(241.6,286.3,1,1,0,0,0,0,1.1);

	this.leftButton = new lib.LeftButton();
	this.leftButton.setTransform(22,191.7);

	this.rightButton = new lib.RightButton();
	this.rightButton.setTransform(456,191.7);

	this.text = new cjs.Text("Ball Game", "39px 'Andola'");
	this.text.lineHeight = 47;
	this.text.setTransform(137.6,19.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AewOuIAAFcMggBAAAQh3AIiWgCQhBgBjJgHQjDgHh6ADIjxAEQh1ACh2AAIoxAAIAAnKQgMikAEj6QAIkUAAiJIAA0NILMAAQCmgMEQAIQFVAJBcgCQAZAAA0ACQCZgCEzgGQEPgDC+AIQAZAAAxgCICWAAQCFgDDDABQBtABDZABIHbAAIAAUMQAKE+ABCXQACECgNDTg");
	this.shape.setTransform(237.7,194.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AezhPIhnCfMg6aAAAIhkie");
	this.shape_1.setTransform(237.7,331.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlRAAIgBAAIKlAAIh1AAg");
	this.shape_2.setTransform(74.5,323.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AwCADQhAAAjKgFMAoZAAAIAAABMggBAAAQhfAEh0AAIg7AAg");
	this.shape_3.setTransform(305.2,323.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B1A793").s().p("A9OBQIhjieIIxAAQB1AAB1gBIIuAAQDJAHBBAAQCWACB3gIMAgBAAAIAAgBIADAAIhnCfg");
	this.shape_4.setTransform(237.7,331.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EEDEC2").s().p("ApoUMQjDgHh6ADIjxAEIscAAIAAnIQgMikAEj6QAIkUAAiJIAA0NILMAAQCmgMEQAIQFVAJBcgCIBNACIHMgIQEPgDC+AIQAZAAAxgCICWAAQCFgDDDABIFGACIHbAAIAAUMQAKE+ABCXQACECgNDTIAAFag");
	this.shape_5.setTransform(237.7,194.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DEF0E5").s().p("EglfAcIMAAAg4PMBK/AAAMAAAA4Pg");
	this.shape_6.setTransform(240,180);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.text,this.rightButton,this.leftButton,this.playButton,this.levels);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,480,360);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;