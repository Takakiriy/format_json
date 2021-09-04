"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var fs = require("fs");
var clipboardy = require("clipboardy");
var lib = require("./lib");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var input_file_path, output_file_path, a_JSON, an_object, formatted_JSON, a_JSON, an_object, formatted_JSON;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("");
                    console.log("Enter only: format the JSON in the clipboard");
                    return [4 /*yield*/, lib.input("Input JSON UTF-8 file path>")];
                case 1:
                    input_file_path = _a.sent();
                    if (input_file_path) {
                        output_file_path = input_file_path + ".updating";
                        a_JSON = fs.readFileSync(input_file_path, "utf-8");
                        an_object = JSON.parse(a_JSON);
                        formatted_JSON = JSON.stringify(an_object, null, "\t");
                        fs.writeFileSync(output_file_path, formatted_JSON);
                    }
                    else {
                        a_JSON = clipboardy.readSync();
                        an_object = JSON.parse(a_JSON);
                        formatted_JSON = JSON.stringify(an_object, null, "\t");
                        clipboardy.writeSync(formatted_JSON);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function callMain() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, main()["catch"](function (e) {
                        console.log("ERROR: " + e.message);
                        var timeOver = new Date();
                        timeOver.setSeconds(timeOver.getSeconds() + 1);
                        while ((new Date()).getTime() < timeOver.getTime()) {
                        }
                    })["finally"](function () {
                        lib.getInputObject().close();
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
callMain();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0X2pzb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZm9ybWF0X2pzb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1QkFBeUI7QUFDekIsdUNBQXlDO0FBQ3pDLDJCQUE2QjtBQUU3QixTQUFnQixJQUFJOzs7Ozs7b0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsOENBQThDLENBQUMsQ0FBQztvQkFDbkMscUJBQU0sR0FBRyxDQUFDLEtBQUssQ0FBRSw2QkFBNkIsQ0FBRSxFQUFBOztvQkFBbEUsZUFBZSxHQUFHLFNBQWdEO29CQUN6RSxJQUFJLGVBQWUsRUFBRTt3QkFDYixnQkFBZ0IsR0FBRyxlQUFlLEdBQUUsV0FBVyxDQUFDO3dCQUNoRCxNQUFNLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBRSxlQUFlLEVBQUcsT0FBTyxDQUFFLENBQUM7d0JBRXRELFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFFLE1BQU0sQ0FBRSxDQUFDO3dCQUNqQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBRSxDQUFDO3dCQUNoRSxFQUFFLENBQUMsYUFBYSxDQUFFLGdCQUFnQixFQUFHLGNBQWMsQ0FBRSxDQUFDO3FCQUN0RDt5QkFBTTt3QkFDQyxNQUFNLEdBQUcsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUUvQixTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBRSxNQUFNLENBQUUsQ0FBQzt3QkFDakMsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUUsQ0FBQzt3QkFDaEUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztxQkFDckM7Ozs7O0NBQ0Q7QUFFRCxTQUFnQixRQUFROzs7O3dCQUVwQixxQkFBTyxJQUFJLEVBQUUsQ0FDUixPQUFLLENBQUEsQ0FBRSxVQUFDLENBQU07d0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUUsWUFBVSxDQUFDLENBQUMsT0FBUyxDQUFFLENBQUM7d0JBQ3JDLElBQU8sUUFBUSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7d0JBQzdCLFFBQVEsQ0FBQyxVQUFVLENBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBRSxDQUFDO3dCQUVqRCxPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRTt5QkFDbkQ7b0JBQ0ksQ0FBQyxDQUFDLENBQ0QsU0FBTyxDQUFBLENBQUM7d0JBQ0wsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNqQyxDQUFDLENBQUMsRUFBQTs7b0JBWE4sU0FXTSxDQUFDOzs7OztDQUNWO0FBQ0QsUUFBUSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIjtcclxuaW1wb3J0ICogYXMgY2xpcGJvYXJkeSBmcm9tICdjbGlwYm9hcmR5JztcclxuaW1wb3J0ICogYXMgbGliIGZyb20gXCIuL2xpYlwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gIG1haW4oKSB7XHJcblx0Y29uc29sZS5sb2coXCJcIik7XHJcblx0Y29uc29sZS5sb2coXCJFbnRlciBvbmx5OiBmb3JtYXQgdGhlIEpTT04gaW4gdGhlIGNsaXBib2FyZFwiKTtcclxuXHRjb25zdCAgaW5wdXRfZmlsZV9wYXRoID0gYXdhaXQgbGliLmlucHV0KCBcIklucHV0IEpTT04gVVRGLTggZmlsZSBwYXRoPlwiICk7XHJcblx0aWYgKGlucHV0X2ZpbGVfcGF0aCkge1xyXG5cdFx0Y29uc3QgIG91dHB1dF9maWxlX3BhdGggPSBpbnB1dF9maWxlX3BhdGggK1wiLnVwZGF0aW5nXCI7XHJcblx0XHRjb25zdCAgYV9KU09OID0gZnMucmVhZEZpbGVTeW5jKCBpbnB1dF9maWxlX3BhdGgsICBcInV0Zi04XCIgKTtcclxuXHJcblx0XHRjb25zdCAgYW5fb2JqZWN0ID0gSlNPTi5wYXJzZSggYV9KU09OICk7XHJcblx0XHRjb25zdCAgZm9ybWF0dGVkX0pTT04gPSBKU09OLnN0cmluZ2lmeSggYW5fb2JqZWN0LCBudWxsLCBcIlxcdFwiICk7XHJcblx0XHRmcy53cml0ZUZpbGVTeW5jKCBvdXRwdXRfZmlsZV9wYXRoLCAgZm9ybWF0dGVkX0pTT04gKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc3QgIGFfSlNPTiA9IGNsaXBib2FyZHkucmVhZFN5bmMoKTtcclxuXHJcblx0XHRjb25zdCAgYW5fb2JqZWN0ID0gSlNPTi5wYXJzZSggYV9KU09OICk7XHJcblx0XHRjb25zdCAgZm9ybWF0dGVkX0pTT04gPSBKU09OLnN0cmluZ2lmeSggYW5fb2JqZWN0LCBudWxsLCBcIlxcdFwiICk7XHJcblx0XHRjbGlwYm9hcmR5LndyaXRlU3luYyhmb3JtYXR0ZWRfSlNPTik7XHJcblx0fVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiAgY2FsbE1haW4oKSB7XHJcblxyXG4gICAgYXdhaXQgIG1haW4oKVxyXG4gICAgICAgIC5jYXRjaCggKGU6IGFueSk9PntcclxuXHRcdFx0Y29uc29sZS5sb2coIGBFUlJPUjogJHtlLm1lc3NhZ2V9YCApO1xyXG5cdFx0XHRjb25zdCAgdGltZU92ZXIgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHR0aW1lT3Zlci5zZXRTZWNvbmRzKCB0aW1lT3Zlci5nZXRTZWNvbmRzKCkgKyAxICk7XHJcblxyXG5cdFx0XHR3aGlsZSAoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSA8IHRpbWVPdmVyLmdldFRpbWUoKSkge1xyXG5cdFx0XHR9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmluYWxseSgoKT0+e1xyXG4gICAgICAgICAgICBsaWIuZ2V0SW5wdXRPYmplY3QoKS5jbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG59XHJcbmNhbGxNYWluKCk7XHJcbiJdfQ==