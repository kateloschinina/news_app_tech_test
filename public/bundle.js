/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	var define = false;
	
	// Require module
	__webpack_require__(1);
	__webpack_require__(15);
	__webpack_require__(17);
	__webpack_require__(24);
	__webpack_require__(25);
	__webpack_require__(26);
	__webpack_require__(27);
	
	// Wait until the page has loaded
	if (document.readyState === 'interactive' || document.readyState === 'complete') {
		document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
	}
	document.addEventListener('DOMContentLoaded', function () {
		// Dispatch a custom event that will tell all required modules to initialise
		document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcJsHeader = __webpack_require__(3);
	
	var _srcJsHeader2 = _interopRequireDefault(_srcJsHeader);
	
	var define = false;
	
	var constructAll = function constructAll() {
		_srcJsHeader2['default'].init();
		document.removeEventListener('o.DOMContentLoaded', constructAll);
	};
	
	document.addEventListener('o.DOMContentLoaded', constructAll);
	
	exports['default'] = _srcJsHeader2['default'];
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _search = __webpack_require__(4);
	
	var _search2 = _interopRequireDefault(_search);
	
	var _mega = __webpack_require__(9);
	
	var _mega2 = _interopRequireDefault(_mega);
	
	var _drawer = __webpack_require__(10);
	
	var _drawer2 = _interopRequireDefault(_drawer);
	
	var _subnav = __webpack_require__(11);
	
	var _subnav2 = _interopRequireDefault(_subnav);
	
	var _sticky = __webpack_require__(14);
	
	var _sticky2 = _interopRequireDefault(_sticky);
	
	var define = false;
	
	var Header = (function () {
		function Header(headerEl) {
			_classCallCheck(this, Header);
	
			if (!headerEl) {
				headerEl = document.querySelector('[data-o-component="o-header"]');
			} else if (typeof headerEl === 'string') {
				headerEl = document.querySelector(headerEl);
			}
	
			if (headerEl.hasAttribute('data-o-header--js')) {
				return;
			}
	
			this.headerEl = headerEl;
	
			_search2['default'].init(this.headerEl);
			_mega2['default'].init(this.headerEl);
			_drawer2['default'].init(this.headerEl);
			_subnav2['default'].init(this.headerEl);
			_sticky2['default'].init(this.headerEl);
	
			this.headerEl.removeAttribute('data-o-header--no-js');
			this.headerEl.setAttribute('data-o-header--js', '');
		}
	
		_createClass(Header, null, [{
			key: 'init',
			value: function init(rootEl) {
				if (!rootEl) {
					rootEl = document.body;
				}
				if (!(rootEl instanceof HTMLElement)) {
					rootEl = document.querySelector(rootEl);
				}
				if (/\bo-header\b/.test(rootEl.getAttribute('data-o-component'))) {
					return new Header(rootEl);
				}
	
				return [].map.call(rootEl.querySelectorAll('[data-o-component="o-header"]'), function (el) {
					if (!el.hasAttribute('data-o-header--js')) {
						return new Header(el);
					}
				}).filter(function (header) {
					return header !== undefined;
				});
			}
		}]);
	
		return Header;
	})();
	
	exports['default'] = Header;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _oToggle = __webpack_require__(5);
	
	var _oToggle2 = _interopRequireDefault(_oToggle);
	
	var define = false;
	
	function init(headerEl) {
		var target = headerEl.querySelector('[data-o-header-search]');
		var controls = target && headerEl.querySelectorAll('[aria-controls="' + target.id + '"]');
	
		if (controls === null || controls.length === 0) {
			return;
		}
	
		var opening = [];
	
		var callback = function callback(state, e) {
			if (state === 'open') {
				// record the opening control
				opening.push(e.currentTarget);
				target.querySelector('[name="q"]').focus();
			} else {
				// re-focus opening control
				opening.length && opening.pop().focus();
			}
		};
	
		for (var i = 0, len = controls.length; i < len; i++) {
			new _oToggle2['default'](controls[i], { target: target, callback: callback });
		}
	}
	
	exports['default'] = { init: init };
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcJsToggle = __webpack_require__(7);
	
	var _srcJsToggle2 = _interopRequireDefault(_srcJsToggle);
	
	var define = false;
	
	var constructAll = function constructAll() {
		_srcJsToggle2['default'].init();
		document.removeEventListener('o.DOMContentLoaded', constructAll);
	};
	
	document.addEventListener('o.DOMContentLoaded', constructAll);
	
	exports['default'] = _srcJsToggle2['default'];
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _target = __webpack_require__(8);
	
	var _target2 = _interopRequireDefault(_target);
	
	var define = false;
	
	var Toggle = (function () {
		function Toggle(toggleEl, config) {
			_classCallCheck(this, Toggle);
	
			if (!Toggle._targets) {
				Toggle._targets = new Map();
			}
	
			if (!toggleEl) {
				return;
			} else if (!(toggleEl instanceof HTMLElement)) {
				toggleEl = document.querySelector(toggleEl);
			}
	
			if (toggleEl.hasAttribute('data-o-toggle--js')) {
				return;
			}
	
			if (!config) {
				config = {};
				// Try to get config set declaratively on the element
				Array.prototype.forEach.call(toggleEl.attributes, function (attr) {
					if (attr.name.indexOf('data-o-toggle') === 0) {
						// Remove the prefix part of the data attribute name
						var key = attr.name.replace('data-o-toggle-', '');
						try {
							// If it's a JSON, a boolean or a number, we want it stored like that, and not as a string
							// We also replace all ' with " so JSON strings are parsed correctly
							config[key] = JSON.parse(attr.value.replace(/\'/g, '"'));
						} catch (e) {
							config[key] = attr.value;
						}
					}
				});
			}
	
			this.callback = config.callback;
			if (typeof this.callback === 'string') {
				this.callback = new Function(this.callback);
			}
	
			this.toggleEl = toggleEl;
	
			if (this.toggleEl.nodeName === 'A') {
				this.toggleEl.setAttribute('role', 'button');
			}
	
			this.toggle = this.toggle.bind(this);
			this.toggleEl.addEventListener('click', this.toggle);
	
			this.toggleEl.setAttribute('data-o-toggle--js', 'true');
	
			this.targetEl = config.target;
			if (!(this.targetEl instanceof HTMLElement)) {
				this.targetEl = document.querySelector(this.targetEl);
			}
	
			if (Toggle._targets.get(this.targetEl) === undefined) {
				this.target = new Toggle.Target(this);
				Toggle._targets.set(this.targetEl, this.target);
			} else {
				this.target = Toggle._targets.get(this.targetEl);
			}
	
			this.target.addToggle(this);
			this.target.close();
		}
	
		_createClass(Toggle, [{
			key: 'open',
			value: function open() {
				this.toggleEl.setAttribute('aria-expanded', 'true');
			}
		}, {
			key: 'close',
			value: function close() {
				this.toggleEl.setAttribute('aria-expanded', 'false');
			}
	
			// toggle is bound to the Toggle instance in the constructor
		}, {
			key: 'toggle',
			value: function toggle(e) {
	
				this.target.toggle();
	
				if (e) {
					e.preventDefault();
				}
	
				if (this.callback) {
					var stateName = this.target.isOpen() ? 'open' : 'close';
					this.callback(stateName, e);
				}
			}
		}, {
			key: 'destroy',
			value: function destroy() {
				this.toggleEl.removeEventListener('click', this.toggle);
				this.toggleEl.removeAttribute('aria-expanded');
				this.toggleEl.removeAttribute('role');
				this.toggleEl.removeAttribute('data-o-toggle--js');
	
				this.target.removeToggle(this);
	
				this.target = undefined;
				this.toggleEl = undefined;
				this.callback = undefined;
			}
		}], [{
			key: 'init',
			value: function init(el, config) {
				if (!el) {
					el = document.body;
				} else if (!(el instanceof HTMLElement)) {
					el = document.querySelector(el);
				}
				var toggleEls = el.querySelectorAll('[data-o-component="o-toggle"]');
				var toggles = [];
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;
	
				try {
					for (var _iterator = toggleEls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var toggleEl = _step.value;
	
						if (!toggleEl.hasAttribute('data-o-toggle--js')) {
							toggles.push(new Toggle(toggleEl, config));
						}
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator['return']) {
							_iterator['return']();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
	
				return toggles;
			}
		}]);
	
		return Toggle;
	})();
	
	;
	
	Toggle.Target = _target2['default'];
	exports['default'] = Toggle;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var define = false;
	
	var Target = (function () {
		function Target(toggle) {
			_classCallCheck(this, Target);
	
			this.targetEl = toggle.targetEl;
			this.toggles = [];
		}
	
		_createClass(Target, [{
			key: 'addToggle',
			value: function addToggle(toggle) {
				this.toggles.push(toggle);
			}
		}, {
			key: 'removeToggle',
			value: function removeToggle(toggle) {
				var togglePosition = this.toggles.indexOf(toggle);
				this.toggles = this.toggles.slice(0, togglePosition).concat(this.toggles.slice(togglePosition + 1));
				if (this.toggles.length === 0) {
					// If that was the last/only toggle that controlled this target then ensure
					// this target is open so it doesn't get stuck in the closed position
					this.open();
				}
			}
		}, {
			key: 'open',
			value: function open() {
				this.targetEl.setAttribute('aria-hidden', 'false');
				this.targetEl.classList.add('o-toggle--active');
				// Set every toggle that controls this target to be open
				this.toggles.forEach(function (toggle) {
					toggle.open();
				});
			}
		}, {
			key: 'close',
			value: function close() {
				this.targetEl.setAttribute('aria-hidden', 'true');
				this.targetEl.classList.remove('o-toggle--active');
	
				// Set every toggle that controls this target to be closed
				this.toggles.forEach(function (toggle) {
					toggle.close();
				});
			}
		}, {
			key: 'toggle',
			value: function toggle() {
				if (this.isOpen()) {
					this.close();
				} else {
					this.open();
				}
			}
		}, {
			key: 'isOpen',
			value: function isOpen() {
				return this.targetEl.classList.contains('o-toggle--active');
			}
		}]);
	
		return Target;
	})();
	
	;
	exports['default'] = Target;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	var define = false;
	
	var INTENT_ENTER = 300;
	var INTENT_LEAVE = 400;
	
	var expanded = [];
	
	function addEvents(parent, menu) {
		var timeout = undefined;
	
		parent.addEventListener('mouseenter', function () {
			clearTimeout(timeout);
	
			if (isOpen(menu)) {
				return;
			}
	
			timeout = setTimeout(function () {
				if (expanded.length) {
					hide(expanded[0]);
					show(menu, false);
				} else {
					show(menu, true);
				}
			}, INTENT_ENTER);
		});
	
		parent.addEventListener('mouseleave', function () {
			clearTimeout(timeout);
			timeout = setTimeout(function () {
				return isOpen(menu) && hide(menu);
			}, INTENT_LEAVE);
		});
	}
	
	function isOpen(menu) {
		return expanded.indexOf(menu) !== -1;
	}
	
	function show(menu, animate) {
		if (animate) {
			menu.classList.add('o-header__mega--animation');
		}
	
		menu.setAttribute('aria-hidden', 'false');
		menu.setAttribute('aria-expanded', 'true');
	
		menu.dispatchEvent(new CustomEvent('oHeader.MegaMenuShow', { bubbles: true }));
	
		expanded.push(menu);
	}
	
	function hide(menu) {
		menu.classList.remove('o-header__mega--animation');
		menu.setAttribute('aria-hidden', 'true');
		menu.setAttribute('aria-expanded', 'false');
	
		menu.dispatchEvent(new CustomEvent('oHeader.MegaMenuHide', { bubbles: true }));
	
		expanded.splice(expanded.indexOf(menu), 1);
	}
	
	function init(headerEl) {
		var menus = Array.from(headerEl.querySelectorAll('[data-o-header-mega]'));
		var parents = menus.map(function (menu) {
			return menu.parentNode;
		});
	
		menus.forEach(function (menu) {
			menu.setAttribute('aria-hidden', 'true');
			menu.setAttribute('aria-expanded', 'false');
		});
	
		parents.forEach(function (parent, i) {
			return addEvents(parent, menus[i]);
		});
	}
	
	exports['default'] = { init: init, show: show, hide: hide };
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	var _oToggle = __webpack_require__(5);
	
	var _oToggle2 = _interopRequireDefault(_oToggle);
	
	var define = false;
	
	var LISTEN_DELAY = 300;
	var INTENT_DELAY = 1000;
	
	function handleCloseEvents(scope, callback) {
		var timeout = undefined;
	
		var handleKeydown = function handleKeydown(e) {
			if (e.keyCode === 27) {
				callback();
			}
		};
	
		var handleClick = function handleClick(e) {
			if (!scope.contains(e.target)) {
				callback();
			}
		};
	
		var handleMouseenter = function handleMouseenter() {
			clearTimeout(timeout);
		};
	
		var handleMouseleave = function handleMouseleave() {
			// IE 11 mobile fires a mouseleave event when the search box gets focus. This means when the user tries
			// to use the search box, it disappears because the drawer closes.
			// Mouseout events should only occur when the drawer takes up less than 100% of the window, so we can ignore
			// any events triggered if the width of the drawer is equal to or bigger than the window.innerwidth
			if (window.innerWidth >= scope.offsetWidth) {
				timeout = setTimeout(callback, INTENT_DELAY);
			}
		};
	
		var handleFocus = function handleFocus(e) {
			var target = e.relatedTarget || e.target;
	
			if (!scope.contains(target)) {
				scope.focus();
			}
		};
	
		var removeEvents = function removeEvents() {
			clearTimeout(timeout);
	
			scope.removeEventListener('mouseenter', handleMouseenter);
			scope.removeEventListener('mouseleave', handleMouseleave);
			document.removeEventListener('click', handleClick);
			document.removeEventListener('touchstart', handleClick);
			document.removeEventListener('keydown', handleKeydown);
			document.removeEventListener('focusin', handleFocus);
			document.removeEventListener('focusout', handleFocus);
		};
	
		var addEvents = function addEvents() {
			scope.addEventListener('mouseenter', handleMouseenter);
			scope.addEventListener('mouseleave', handleMouseleave);
			document.addEventListener('click', handleClick);
			document.addEventListener('touchstart', handleClick);
			document.addEventListener('keydown', handleKeydown);
	
			// Firefox doesn't support focusin or focusout
			// https://bugzilla.mozilla.org/show_bug.cgi?id=687787
			document.addEventListener('focusin', handleFocus);
			document.addEventListener('focusout', handleFocus);
		};
	
		return { addEvents: addEvents, removeEvents: removeEvents, handleMouseleave: handleMouseleave };
	}
	
	function addDrawerToggles(drawerEl) {
		var controls = [].concat(_toConsumableArray(document.body.querySelectorAll('[aria-controls="' + drawerEl.id + '"]')));
	
		var handleClose = undefined;
		var openingControl = undefined;
	
		function toggleCallback(state, e) {
			if (state === 'close') {
				handleClose.removeEvents();
	
				openingControl.focus();
			} else {
				// don't capture the initial click or accidental double taps etc.
				// we could use transitionend but scoping is tricky and it needs prefixing and...
				setTimeout(handleClose.addEvents, LISTEN_DELAY);
	
				// record the opening control so we can send focus back to it when closing the drawer
				openingControl = e.currentTarget;
	
				// aria-controls is only supported by JAWS.
				// In a setTimeout callback to avoid flickering transitions in Chrome (v54)
				setTimeout(function () {
					return drawerEl.focus();
				});
			}
	
			drawerEl.classList.toggle('o-header__drawer--closing', state === 'close');
			drawerEl.classList.toggle('o-header__drawer--opening', state === 'open');
		}
	
		controls.forEach(function (control) {
			var drawerToggle = new _oToggle2['default'](control, {
				target: drawerEl,
				callback: toggleCallback
			});
	
			// Both toggles have the same target, so the toggle function will be the same
			// If there's a separate handleClose instance for each toggle, removeEvents doesn't work
			// when the close toggle is clicked
			if (!handleClose) {
				handleClose = handleCloseEvents(drawerEl, drawerToggle.toggle);
			}
		});
	
		// make the drawer programmatically focusable
		drawerEl.tabIndex = -1;
	}
	
	function addSubmenuToggles(drawerEl) {
		var submenus = drawerEl.querySelectorAll('[id^="o-header-drawer-child-"]');
	
		Array.from(submenus).forEach(function (submenu) {
			var button = drawerEl.querySelector('[aria-controls="' + submenu.id + '"]');
	
			submenu.setAttribute('aria-hidden', 'true');
	
			new _oToggle2['default'](button, {
				target: submenu,
				callback: function callback(state) {
					button.textContent = button.textContent.replace(/fewer|more/, state === 'open' ? 'fewer' : 'more');
				}
			});
		});
	}
	
	function init() {
		var drawerEl = document.body.querySelector('[data-o-header-drawer]');
		if (!drawerEl) {
			return;
		}
		addSubmenuToggles(drawerEl);
		addDrawerToggles(drawerEl);
	
		drawerEl.removeAttribute('data-o-header-drawer--no-js');
		drawerEl.setAttribute('data-o-header-drawer--js', 'true');
	}
	
	exports['default'] = { init: init, handleCloseEvents: handleCloseEvents };
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var _oUtils = __webpack_require__(12);
	
	var oUtils = _interopRequireWildcard(_oUtils);
	
	var define = false;
	
	function init(headerEl) {
		var subnav = headerEl.querySelector('[data-o-header-subnav]');
	
		if (subnav === null) {
			return;
		}
	
		var wrapper = subnav.querySelector('[data-o-header-subnav-wrapper]');
		var buttons = Array.from(subnav.getElementsByTagName('button'));
	
		var scrollWidth = undefined;
		var clientWidth = undefined;
	
		function direction(button) {
			return button.className.match(/left|right/).pop();
		}
	
		function scrollable() {
			scrollWidth = wrapper.scrollWidth;
			clientWidth = wrapper.clientWidth;
	
			buttons.forEach(function (button) {
				if (direction(button) === 'left') {
					button.disabled = wrapper.scrollLeft === 0;
				} else {
					var remaining = scrollWidth - clientWidth - wrapper.scrollLeft;
					// Allow a little difference as scrollWidth is fast, not accurate.
					button.disabled = remaining <= 1;
				}
			});
		}
	
		function scroll(e) {
			var distance = 100;
	
			if (direction(e.currentTarget) === 'left') {
				distance = (wrapper.scrollLeft > distance ? distance : wrapper.scrollLeft) * -1;
			} else {
				var remaining = scrollWidth - clientWidth - wrapper.scrollLeft;
				distance = remaining > distance ? distance : remaining;
			}
	
			wrapper.scrollLeft = wrapper.scrollLeft + distance;
	
			scrollable();
		}
	
		wrapper.addEventListener('scroll', oUtils.throttle(scrollable, 100));
		window.addEventListener('oViewport.resize', scrollable);
	
		buttons.forEach(function (button) {
			button.onclick = scroll;
		});
	
		scrollable();
	}
	
	module.exports = { init: init };

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(13);

/***/ },
/* 13 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var define = false;
	
	/**
	*
	* Debounces function so it is only called after n milliseconds
	* without it not being called
	*
	* @example
	* Utils.debounce(myFunction() {}, 100);
	*
	* @param {Function} func - Function to be debounced
	* @param {number} wait - Time in miliseconds
	*
	* @returns {Function} - Debounced function
	*/
	function debounce(func, wait) {
		var timeout = undefined;
		return function () {
			var _this = this;
	
			var args = arguments;
			var later = function later() {
				timeout = null;
				func.apply(_this, args);
			};
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
		};
	};
	
	/**
	*
	* Throttle function so it is only called once every n milliseconds
	*
	* @example
	* Utils.throttle(myFunction() {}, 100);
	*
	* @param {Function} func - Function to be throttled
	* @param {number} wait - Time in miliseconds
	*
	* @returns {Function} - Throttled function
	*/
	function throttle(func, wait) {
		var timeout = undefined;
		return function () {
			var _this2 = this;
	
			if (timeout) {
				return;
			}
			var args = arguments;
			var later = function later() {
				timeout = null;
				func.apply(_this2, args);
			};
	
			timeout = setTimeout(later, wait);
		};
	};
	
	exports.debounce = debounce;
	exports.throttle = throttle;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _oUtils = __webpack_require__(12);
	
	var define = false;
	
	function init(headerEl) {
		if (!headerEl.hasAttribute('data-o-header--sticky')) {
			return;
		}
	
		var viewportOffset = undefined;
		var lastScrollDepth = undefined;
		var lastAnimationFrame = undefined;
	
		function handleFrame() {
			// sticky el will appear when scrolled down from page top to
			// (arbitrarily) > half the viewport height
			var scrollDepth = window.pageYOffset || window.scrollY;
			var isActive = scrollDepth > viewportOffset;
	
			headerEl.classList.toggle('o-header--sticky-active', isActive);
	
			// allow a little wiggling room so we don't get too hasty toggling up/down state
			if (Math.abs(scrollDepth - lastScrollDepth) > 20) {
				var isScrollingDown = lastScrollDepth < scrollDepth;
				headerEl.classList.toggle('o-header--sticky-scroll-down', isActive && isScrollingDown);
				headerEl.classList.toggle('o-header--sticky-scroll-up', isActive && !isScrollingDown);
			}
	
			lastScrollDepth = scrollDepth;
		}
	
		function startLoop() {
			viewportOffset = window.innerHeight / 2;
	
			lastAnimationFrame = window.requestAnimationFrame(function () {
				handleFrame();
				startLoop();
			});
		}
	
		function stopLoop() {
			lastAnimationFrame && window.cancelAnimationFrame(lastAnimationFrame);
		}
	
		function scrollStart() {
			window.removeEventListener('scroll', scrollStart);
			window.addEventListener('scroll', debouncedScrollEnd);
			startLoop();
		}
	
		function scrollEnd() {
			stopLoop();
			window.removeEventListener('scroll', debouncedScrollEnd);
			window.addEventListener('scroll', scrollStart);
		}
	
		var debouncedScrollEnd = (0, _oUtils.debounce)(scrollEnd, 300);
	
		window.addEventListener('scroll', scrollStart);
	
		handleFrame();
	};
	
	exports['default'] = { init: init };
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(16);

/***/ },
/* 16 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	var define = false;
	
	/*global module*/
	
	/**
	 * Detect IE 8 through injected conditional comments:
	 * no UA detection, no need for conditional compilation or JS check
	 * @return {Bool} true if the browser is IE 8
	 */
	var isIE8 = (function () {
		var b = document.createElement('B');
		var docElem = document.documentElement;
		var isIE = undefined;
	
		b.innerHTML = '<!--[if IE 8]><b id="ie8test"></b><![endif]-->';
		docElem.appendChild(b);
		isIE = !!document.getElementById('ie8test');
		docElem.removeChild(b);
		return isIE;
	})();
	
	/**
	 * Grab grid properties
	 * @return {Object} layout names and gutter widths
	 */
	function getGridProperties() {
		return getGridFromDoc('after');
	}
	
	/**
	 * Get all layout sizes
	 * @return {Object} layout names and sizes
	 */
	function getGridBreakpoints() {
		return getGridFromDoc('before');
	}
	
	/**
	 * Grab grid properties surfaced in html:after and html:before's content
	 * @param {String} position Whether to get all properties in :before, or current properties in :after
	 * @return {Object} layout names and gutter widths
	 */
	function getGridFromDoc(position) {
		// Contained in a try/catch as it should not error if o-grid styles are not (deliberately or accidentally) loaded
		// e.g. o-tracking will always try to read this property, but the page is not obliged to use o-grid for layout
		try {
			var gridProperties = window.getComputedStyle(document.documentElement, ':' + position).getPropertyValue('content');
			// Firefox computes: "{\"foo\": \"bar\"}"
			// We want readable JSON: {"foo": "bar"}
			gridProperties = gridProperties.replace(/'/g, '').replace(/\\/g, '').replace(/^"/, '').replace(/"$/, '');
			return JSON.parse(gridProperties);
		} catch (e) {
			return {};
		}
	}
	
	/**
	 * Grab the current layout
	 * @return {String} Layout name
	 */
	function getCurrentLayout() {
		if (isIE8) {
			return 'L';
		}
	
		return getGridProperties().layout;
	}
	
	/**
	 * Grab the current space between columns
	 * @return {String} Gutter width in pixels
	 */
	function getCurrentGutter() {
		if (isIE8) {
			return '20px';
		}
	
		return getGridProperties().gutter;
	}
	
	/**
	 * This sets MediaQueryListeners on all the o-grid breakpoints
	 * and fires a `o-grid.layoutChange` event on layout change.
	 */
	function enableLayoutChangeEvents() {
		// Create a map containing all breakpoints exposed via html:before
		var gridLayouts = getGridBreakpoints();
		if (gridLayouts.hasOwnProperty('layouts')) {
			(function () {
				var layouts = gridLayouts.layouts;
				var breakpoints = new Map(Object.keys(layouts).map(function (key) {
					return [key, layouts[key]];
				}));
				var decr1 = function decr1(val) {
					return Number(val.replace('px', '') - 1) + 'px';
				};
	
				// Generate media queries for each
				breakpoints.forEach(function (width, size) {
					var queries = [];
					if (size === 'S') {
						queries.push('(max-width: ' + width + ')');
						queries.push('(min-width: ' + width + ') and (max-width: ' + decr1(breakpoints.get('M')) + ')');
					} else if (size === 'M') {
						queries.push('(min-width: ' + width + ') and (max-width: ' + decr1(breakpoints.get('L')) + ')');
					} else if (size === 'L') {
						queries.push('(min-width: ' + width + ') and (max-width: ' + decr1(breakpoints.get('XL')) + ')');
					} else if (size === 'XL') {
						queries.push('(min-width: ' + width + ')');
					}
	
					// matchMedia listener handler: Dispatch `o-grid.layoutChange` event if a match
					var handleMQChange = function handleMQChange(mql) {
						if (mql.matches) {
							window.dispatchEvent(new CustomEvent('o-grid.layoutChange', {
								detail: {
									layout: size
								}
							}));
						}
					};
	
					// Create a new listener for each layout
					queries.forEach(function (mq) {
						var mql = window.matchMedia(mq);
						mql.addListener(handleMQChange);
						handleMQChange(mql);
					});
				});
			})();
		} else {
			console.error('To enable grid layout change events, include oGridSurfaceLayoutSizes in your Sass');
		}
	}
	
	exports['default'] = {
		getCurrentLayout: getCurrentLayout,
		getCurrentGutter: getCurrentGutter,
		getGridBreakpoints: getGridBreakpoints,
		enableLayoutChangeEvents: enableLayoutChangeEvents
	};
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcJsFooter = __webpack_require__(19);
	
	var _srcJsFooter2 = _interopRequireDefault(_srcJsFooter);
	
	var define = false;
	
	var constructAll = function constructAll() {
		_srcJsFooter2['default'].init();
		document.removeEventListener('o.DOMContentLoaded', constructAll);
	};
	
	document.addEventListener('o.DOMContentLoaded', constructAll);
	
	exports['default'] = _srcJsFooter2['default'];
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _oToggle = __webpack_require__(5);
	
	var _oToggle2 = _interopRequireDefault(_oToggle);
	
	var _layout = __webpack_require__(20);
	
	var _layout2 = _interopRequireDefault(_layout);
	
	var define = false;
	
	var COLLAPSIBLE_BREAKPOINTS = ['default', 'XS', 'S'];
	
	var Footer = (function () {
		function Footer(footerEl) {
			var _this = this;
	
			_classCallCheck(this, Footer);
	
			if (!footerEl) {
				footerEl = document.querySelector('[data-o-component="o-footer"]');
			} else if (typeof footerEl === 'string') {
				footerEl = document.querySelector(footerEl);
			}
	
			this.footerEl = footerEl;
	
			(0, _layout2['default'])(function (breakpoint) {
				var shouldCollapse = Footer.shouldCollapse(breakpoint);
	
				if (shouldCollapse && !_this._toggles) {
					return _this.setup();
				}
	
				if (!shouldCollapse && _this._toggles) {
					return _this.destroy();
				}
			});
	
			this.footerEl.removeAttribute('data-o-footer--no-js');
			this.footerEl.setAttribute('data-o-footer--js', '');
		}
	
		_createClass(Footer, [{
			key: 'setup',
			value: function setup() {
				var _this2 = this;
	
				this._toggles = [];
	
				var toggleEls = this.footerEl.querySelectorAll('[aria-controls]');
	
				Array.prototype.forEach.call(toggleEls, function (toggleEl) {
					var target = document.getElementById(toggleEl.getAttribute('aria-controls'));
					toggleEl.setAttribute('role', 'button');
					_this2._toggles.push(new _oToggle2['default'](toggleEl, { target: target }));
				});
			}
		}, {
			key: 'destroy',
			value: function destroy() {
				this._toggles.forEach(function (toggle) {
					return toggle.destroy();
				});
				this._toggles = null;
			}
		}], [{
			key: 'shouldCollapse',
			value: function shouldCollapse(breakpoint) {
				return COLLAPSIBLE_BREAKPOINTS.indexOf(breakpoint) !== -1;
			}
		}, {
			key: 'init',
			value: function init(rootEl) {
				if (!rootEl) {
					rootEl = document.body;
				} else if (typeof rootEl === 'string') {
					rootEl = document.querySelector(rootEl);
				}
	
				var footerEl = rootEl.querySelector('[data-o-component="o-footer"]');
	
				if (footerEl) {
					return new Footer(footerEl);
				}
			}
		}, {
			key: 'collapsibleBreakpoints',
			get: function get() {
				return COLLAPSIBLE_BREAKPOINTS;
			}
		}]);
	
		return Footer;
	})();
	
	exports['default'] = Footer;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports['default'] = init;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _oGrid = __webpack_require__(15);
	
	var _oGrid2 = _interopRequireDefault(_oGrid);
	
	var _oViewport = __webpack_require__(21);
	
	var _oViewport2 = _interopRequireDefault(_oViewport);
	
	var define = false;
	
	function init(callback) {
		_oViewport2['default'].listenTo('resize');
	
		var lastBreakpoint = _oGrid2['default'].getCurrentLayout();
	
		document.body.addEventListener('oViewport.resize', function () {
			var breakpoint = _oGrid2['default'].getCurrentLayout();
	
			if (breakpoint !== lastBreakpoint) {
				callback(breakpoint);
				lastBreakpoint = breakpoint;
			}
		});
	
		callback(lastBreakpoint);
	}
	
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(22);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	var define = false;
	
	// let debug;
	var utils = __webpack_require__(23);
	var throttle = utils.throttle;
	var debounce = utils.debounce;
	
	var listeners = {};
	var intervals = {
		resize: 100,
		orientation: 100,
		visibility: 100,
		scroll: 100
	};
	
	function setThrottleInterval(eventType, interval) {
		if (typeof arguments[0] === 'number') {
			setThrottleInterval('scroll', arguments[0]);
			setThrottleInterval('resize', arguments[1]);
			setThrottleInterval('orientation', arguments[2]);
			setThrottleInterval('visibility', arguments[3]);
		} else if (interval) {
			intervals[eventType] = interval;
		}
	}
	
	function listenToResize() {
		if (listeners.resize) {
			return;
		}
		var eventType = 'resize';
		var handler = debounce(function (ev) {
			utils.broadcast('resize', {
				viewport: utils.getSize(),
				originalEvent: ev
			});
		}, intervals.resize);
	
		window.addEventListener(eventType, handler);
		listeners.resize = {
			eventType: eventType,
			handler: handler
		};
	}
	
	function listenToOrientation() {
	
		if (listeners.orientation) {
			return;
		}
	
		var eventType = 'orientationchange';
		var handler = debounce(function (ev) {
			utils.broadcast('orientation', {
				viewport: utils.getSize(),
				orientation: utils.getOrientation(),
				originalEvent: ev
			});
		}, intervals.orientation);
	
		window.addEventListener(eventType, handler);
		listeners.orientation = {
			eventType: eventType,
			handler: handler
		};
	}
	
	function listenToVisibility() {
	
		if (listeners.visibility) {
			return;
		}
	
		var eventType = utils.detectVisiblityAPI().eventType;
		var handler = debounce(function (ev) {
			utils.broadcast('visibility', {
				hidden: utils.getVisibility(),
				originalEvent: ev
			});
		}, intervals.visibility);
	
		window.addEventListener(eventType, handler);
	
		listeners.visibility = {
			eventType: eventType,
			handler: handler
		};
	}
	
	function listenToScroll() {
	
		if (listeners.scroll) {
			return;
		}
	
		var eventType = 'scroll';
		var handler = throttle(function (ev) {
			var scrollPos = utils.getScrollPosition();
			utils.broadcast('scroll', {
				viewport: utils.getSize(),
				scrollHeight: scrollPos.height,
				scrollLeft: scrollPos.left,
				scrollTop: scrollPos.top,
				scrollWidth: scrollPos.width,
				originalEvent: ev
			});
		}, intervals.scroll);
	
		window.addEventListener(eventType, handler);
		listeners.scroll = {
			eventType: eventType,
			handler: handler
		};
	}
	
	function listenTo(eventType) {
		if (eventType === 'resize' || eventType === 'all') {
			listenToResize();
		}
	
		if (eventType === 'scroll' || eventType === 'all') {
			listenToScroll();
		}
	
		if (eventType === 'orientation' || eventType === 'all') {
			listenToOrientation();
		}
	
		if (eventType === 'visibility' || eventType === 'all') {
			listenToVisibility();
		}
	}
	
	function stopListeningTo(eventType) {
		if (eventType === 'all') {
			Object.keys(listeners).forEach(stopListeningTo);
		} else if (listeners[eventType]) {
			window.removeEventListener(listeners[eventType].eventType, listeners[eventType].handler);
			delete listeners[eventType];
		}
	}
	
	module.exports = {
		debug: function debug() {
			// debug = true;
			utils.debug();
		},
		listenTo: listenTo,
		stopListeningTo: stopListeningTo,
		setThrottleInterval: setThrottleInterval,
		getOrientation: utils.getOrientation,
		getSize: utils.getSize,
		getScrollPosition: utils.getScrollPosition,
		getVisibility: utils.getVisibility
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	var define = false;
	
	/* jshint devel: true */
	var oUtils = __webpack_require__(12);
	
	var _debug = undefined;
	
	function broadcast(eventType, data, target) {
		target = target || document.body;
	
		if (_debug) {
			console.log('o-viewport', eventType, data);
		}
	
		target.dispatchEvent(new CustomEvent('oViewport.' + eventType, {
			detail: data,
			bubbles: true
		}));
	}
	
	function getHeight(ignoreScrollbars) {
		return ignoreScrollbars ? document.documentElement.clientHeight : Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	}
	
	function getWidth(ignoreScrollbars) {
		return ignoreScrollbars ? document.documentElement.clientWidth : Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
	
	function getSize(ignoreScrollbars) {
		return {
			height: module.exports.getHeight(ignoreScrollbars),
			width: module.exports.getWidth(ignoreScrollbars)
		};
	}
	
	function getScrollPosition() {
		var de = document.documentElement;
		var db = document.body;
	
		// adapted from https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY
		var isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';
	
		var ieX = isCSS1Compat ? de.scrollLeft : db.scrollLeft;
		var ieY = isCSS1Compat ? de.scrollTop : db.scrollTop;
		return {
			height: db.scrollHeight,
			width: db.scrollWidth,
			left: window.pageXOffset || window.scrollX || ieX,
			top: window.pageYOffset || window.scrollY || ieY
		};
	}
	
	function getOrientation() {
		var orientation = window.screen.orientation || window.screen.mozOrientation || window.screen.msOrientation || undefined;
		if (orientation) {
			return typeof orientation === 'string' ? orientation.split('-')[0] : orientation.type.split('-')[0];
		} else if (window.matchMedia) {
			return window.matchMedia('(orientation: portrait)').matches ? 'portrait' : 'landscape';
		} else {
			return getHeight() >= getWidth() ? 'portrait' : 'landscape';
		}
	}
	
	function detectVisiblityAPI() {
		var hiddenName = undefined;
		var eventType = undefined;
		if (typeof document.hidden !== 'undefined') {
			hiddenName = 'hidden';
			eventType = 'visibilitychange';
		} else if (typeof document.mozHidden !== 'undefined') {
			hiddenName = 'mozHidden';
			eventType = 'mozvisibilitychange';
		} else if (typeof document.msHidden !== 'undefined') {
			hiddenName = 'msHidden';
			eventType = 'msvisibilitychange';
		} else if (typeof document.webkitHidden !== 'undefined') {
			hiddenName = 'webkitHidden';
			eventType = 'webkitvisibilitychange';
		}
	
		return {
			hiddenName: hiddenName,
			eventType: eventType
		};
	}
	
	function getVisibility() {
		var hiddenName = detectVisiblityAPI().hiddenName;
		return document[hiddenName];
	}
	
	module.exports = {
		debug: function debug() {
			_debug = true;
		},
		broadcast: broadcast,
		getWidth: getWidth,
		getHeight: getHeight,
		getSize: getSize,
		getScrollPosition: getScrollPosition,
		getVisibility: getVisibility,
		getOrientation: getOrientation,
		detectVisiblityAPI: detectVisiblityAPI,
		debounce: oUtils.debounce,
		throttle: oUtils.throttle
	};

/***/ },
/* 24 */
/***/ function(module, exports) {



/***/ },
/* 25 */
/***/ function(module, exports) {



/***/ },
/* 26 */
/***/ function(module, exports) {



/***/ },
/* 27 */
/***/ function(module, exports) {



/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
//# sourceMappingURL=bundle.js.map
