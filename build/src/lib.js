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
exports.cc = exports.debugOut = exports.pp = exports.getTestWorkFolderFullPath = exports.checkNotInGitWorking = exports.pathResolve = exports.inputSkip = exports.inputPath = exports.getInputObject = exports.input = void 0;
var fs = require("fs");
var path = require("path");
var readline = require("readline");
var inputDefault = [
//    'test.json'
];
// StandardInputBuffer
var StandardInputBuffer = /** @class */ (function () {
    function StandardInputBuffer() {
        this.inputBuffer = [];
        this.inputResolver = undefined;
    }
    StandardInputBuffer.prototype.delayedConstructor = function () {
        var _this = this;
        this.readlines = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.readlines.on('line', function (line) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.inputResolver) {
                    this.inputResolver(line); // inputResolver() is resolve() in input()
                    this.inputResolver = undefined;
                }
                else {
                    this.inputBuffer.push(line);
                }
                return [2 /*return*/];
            });
        }); });
        this.readlines.setPrompt('');
        this.readlines.prompt();
    };
    StandardInputBuffer.prototype.input = function (guide) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!this.readlines) {
                    this.delayedConstructor();
                }
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var nextLine = _this.inputBuffer.shift();
                        if (nextLine) {
                            console.log(guide + nextLine);
                            resolve(nextLine);
                        }
                        else {
                            process.stdout.write(guide);
                            _this.inputResolver = resolve;
                        }
                    })];
            });
        });
    };
    StandardInputBuffer.prototype.close = function () {
        if (this.readlines) {
            this.readlines.close();
        }
    };
    return StandardInputBuffer;
}());
// InputOption
var InputOption = /** @class */ (function () {
    function InputOption(inputLines) {
        this.inputLines = inputLines;
        this.nextLineIndex = 0;
        this.nextParameterIndex = 2;
    }
    return InputOption;
}());
// inputOption
var inputOption = new InputOption(inputDefault);
// input
// Example: const name = await input('What is your name? ');
function input(guide) {
    return __awaiter(this, void 0, void 0, function () {
        var value, value;
        return __generator(this, function (_a) {
            // Input emulation
            if (inputOption.inputLines) {
                if (inputOption.nextLineIndex < inputOption.inputLines.length) {
                    value = inputOption.inputLines[inputOption.nextLineIndex];
                    inputOption.nextLineIndex += 1;
                    console.log(guide + value);
                    return [2 /*return*/, value];
                }
            }
            // Read the starting process parameters
            while (inputOption.nextParameterIndex < process.argv.length) {
                value = process.argv[inputOption.nextParameterIndex];
                inputOption.nextParameterIndex += 1;
                if (value.substr(0, 1) !== '-') {
                    console.log(guide + value);
                    return [2 /*return*/, value];
                }
                if (value !== '--test') {
                    inputOption.nextParameterIndex += 1;
                }
            }
            // input
            return [2 /*return*/, InputObject.input(guide)];
        });
    });
}
exports.input = input;
var InputObject = new StandardInputBuffer();
function getInputObject() {
    return InputObject;
}
exports.getInputObject = getInputObject;
// inputPath
// Example: const name = await input('What is your name? ');
function inputPath(guide) {
    return __awaiter(this, void 0, void 0, function () {
        var key;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, input(guide)];
                case 1:
                    key = _a.sent();
                    if (key.endsWith('()')) {
                        return [2 /*return*/, key];
                    }
                    else {
                        return [2 /*return*/, pathResolve(key)];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.inputPath = inputPath;
// inputSkip
function inputSkip(count) {
    inputOption.nextParameterIndex += count;
}
exports.inputSkip = inputSkip;
// pathResolve
function pathResolve(path_) {
    // '/c/home' format to current OS format
    if (path_.length >= 3) {
        if (path_[0] === '/' && path_[2] === '/') {
            path_ = path_[1] + ':' + path_.substr(2);
        }
    }
    // Replace separators to OS format
    path_ = path.resolve(path_);
    return path_;
}
exports.pathResolve = pathResolve;
// checkNotInGitWorking
function checkNotInGitWorking() {
    var path_ = process.cwd();
    if (!path_.includes('extract_git_branches')) {
        throw new Error('This is not in project folder.');
    }
    while (path_.includes('extract_git_branches')) {
        path_ = path.dirname(path_);
    }
    while (path_ !== '/') {
        if (fs.existsSync(path_ + "/.git")) {
            throw new Error('This test is not supported with git submodule.');
        }
        path_ = path.dirname(path_);
    }
}
exports.checkNotInGitWorking = checkNotInGitWorking;
// getTestWorkFolderFullPath
function getTestWorkFolderFullPath() {
    var path_ = process.cwd();
    if (!path_.includes('extract_git_branches')) {
        throw new Error('This is not in project folder.');
    }
    while (path_.includes('extract_git_branches')) {
        path_ = path.dirname(path_);
    }
    return path_ + "/_test_of_extract_git_branches";
}
exports.getTestWorkFolderFullPath = getTestWorkFolderFullPath;
// pp
// Debug print.
// #keyword: pp
// Example:
//    pp(var);
// Example:
//    var d = pp(var);
//    d = d;  // Set break point here and watch the variable d
// Example:
//    try {
//
//        await main();
//    } finally {
//        var d = pp('');
//        d = [];  // Set break point here and watch the variable d
//    }
function pp(message) {
    if (typeof message === 'object') {
        message = JSON.stringify(message);
    }
    exports.debugOut.push(message.toString());
    return exports.debugOut;
}
exports.pp = pp;
exports.debugOut = [];
// cc
// Through counter.
// #keyword: cc
// Example:
//   cc();
// Example:
//   var c = cc().debugOut;  // Set break point here and watch the variable c
// Example:
//   if ( cc(2).isTarget )
//   var d = pp('');  // Set break point here and watch the variable d
function cc(targetCount, label) {
    if (targetCount === void 0) { targetCount = 9999999; }
    if (label === void 0) { label = '0'; }
    if (!(label in gCount)) {
        gCount[label] = 0;
    }
    gCount[label] += 1;
    pp(label + ":countThrough[" + label + "] = " + gCount[label]);
    var isTarget = (gCount[label] === targetCount);
    if (isTarget) {
        pp('    **** It is before the target! ****');
    }
    return { isTarget: isTarget, debugOut: exports.debugOut };
}
exports.cc = cc;
var gCount = {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1QkFBeUI7QUFDekIsMkJBQTZCO0FBQzdCLG1DQUFxQztBQUVyQyxJQUFNLFlBQVksR0FBYTtBQUMvQixpQkFBaUI7Q0FDaEIsQ0FBQztBQUVGLHNCQUFzQjtBQUN0QjtJQUFBO1FBRUksZ0JBQVcsR0FBYSxFQUFFLENBQUM7UUFDM0Isa0JBQWEsR0FBMkIsU0FBUyxDQUFDO0lBNEN0RCxDQUFDO0lBMUNHLGdEQUFrQixHQUFsQjtRQUFBLGlCQWdCQztRQWZHLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQztZQUN0QyxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1NBQ3pCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFPLElBQVk7O2dCQUN6QyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7b0JBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBRSwwQ0FBMEM7b0JBQ3JFLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO2lCQUNsQztxQkFBTTtvQkFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDL0I7OzthQUNKLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVNLG1DQUFLLEdBQVosVUFBYSxLQUFhOzs7O2dCQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtv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QUMsQ0FBQztJQUNsQyxPQUFPLGdCQUFRLENBQUM7QUFDcEIsQ0FBQztBQU5ELGdCQU1DO0FBQ2EsUUFBQSxRQUFRLEdBQWEsRUFBRSxDQUFDO0FBRXRDLEtBQUs7QUFDTCxtQkFBbUI7QUFDbkIsZUFBZTtBQUNmLFdBQVc7QUFDWCxVQUFVO0FBQ1YsV0FBVztBQUNYLDZFQUE2RTtBQUM3RSxXQUFXO0FBQ1gsMEJBQTBCO0FBQzFCLHNFQUFzRTtBQUN0RSxTQUFpQixFQUFFLENBQUUsV0FBNkIsRUFBRSxLQUFtQjtJQUFsRCw0QkFBQSxFQUFBLHFCQUE2QjtJQUFFLHNCQUFBLEVBQUEsV0FBbUI7SUFDbkUsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxFQUFFO1FBQ3BCLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDckI7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25CLEVBQUUsQ0FBSyxLQUFLLHNCQUFpQixLQUFLLFlBQU8sTUFBTSxDQUFDLEtBQUssQ0FBRyxDQUFFLENBQUM7SUFDM0QsSUFBTSxRQUFRLEdBQUcsQ0FBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssV0FBVyxDQUFFLENBQUM7SUFFbkQsSUFBSSxRQUFRLEVBQUU7UUFDVixFQUFFLENBQUUsd0NBQXdDLENBQUUsQ0FBQztLQUNsRDtJQUNELE9BQVEsRUFBRSxRQUFRLFVBQUEsRUFBRSxRQUFRLGtCQUFBLEVBQUUsQ0FBQztBQUNuQyxDQUFDO0FBYkQsZ0JBYUM7QUFDRCxJQUFPLE1BQU0sR0FBNkIsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSBcImZzXCI7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0ICogYXMgcmVhZGxpbmUgZnJvbSAncmVhZGxpbmUnO1xyXG5cclxuY29uc3QgaW5wdXREZWZhdWx0OiBzdHJpbmdbXSA9IFtcclxuLy8gICAgJ3Rlc3QuanNvbidcclxuXTtcclxuXHJcbi8vIFN0YW5kYXJkSW5wdXRCdWZmZXJcclxuY2xhc3MgIFN0YW5kYXJkSW5wdXRCdWZmZXIge1xyXG4gICAgcmVhZGxpbmVzOiByZWFkbGluZS5JbnRlcmZhY2UgfCB1bmRlZmluZWQ7XHJcbiAgICBpbnB1dEJ1ZmZlcjogc3RyaW5nW10gPSBbXTtcclxuICAgIGlucHV0UmVzb2x2ZXI/OiAoYW5zd2VyOnN0cmluZyk9PnZvaWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgZGVsYXllZENvbnN0cnVjdG9yKCkgeyAgLy8gSXQgaXMgbm90IGNvbnN0cnVjdG9yLCBiZWNhdXNlIFwiY3JlYXRlSW50ZXJmYWNlXCIgc3RvcHMgdGhlIHByb2dyYW0sIGlmIHN0ZGluIHdhcyBub3QgdXNlZC5cclxuICAgICAgICB0aGlzLnJlYWRsaW5lcyA9IHJlYWRsaW5lLmNyZWF0ZUludGVyZmFjZSh7XHJcbiAgICAgICAgICAgIGlucHV0OiBwcm9jZXNzLnN0ZGluLFxyXG4gICAgICAgICAgICBvdXRwdXQ6IHByb2Nlc3Muc3Rkb3V0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZWFkbGluZXMub24oJ2xpbmUnLCBhc3luYyAobGluZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0UmVzb2x2ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRSZXNvbHZlcihsaW5lKTsgIC8vIGlucHV0UmVzb2x2ZXIoKSBpcyByZXNvbHZlKCkgaW4gaW5wdXQoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFJlc29sdmVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dEJ1ZmZlci5wdXNoKGxpbmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucmVhZGxpbmVzLnNldFByb21wdCgnJyk7XHJcbiAgICAgICAgdGhpcy5yZWFkbGluZXMucHJvbXB0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgIGlucHV0KGd1aWRlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIGlmICghdGhpcy5yZWFkbGluZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWxheWVkQ29uc3RydWN0b3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAgbmV3IFByb21pc2UoXHJcbiAgICAgICAgICAgIChyZXNvbHZlOiAoYW5zd2VyOnN0cmluZyk9PnZvaWQsICByZWplY3Q6IChhbnN3ZXI6c3RyaW5nKT0+dm9pZCApID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCAgbmV4dExpbmUgPSB0aGlzLmlucHV0QnVmZmVyLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIGlmIChuZXh0TGluZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ3VpZGUgKyBuZXh0TGluZSk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG5leHRMaW5lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGd1aWRlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRSZXNvbHZlciA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5yZWFkbGluZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFkbGluZXMuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIElucHV0T3B0aW9uXHJcbmNsYXNzIElucHV0T3B0aW9uIHtcclxuICAgIGlucHV0TGluZXM6IHN0cmluZ1tdO1xyXG4gICAgbmV4dExpbmVJbmRleDogbnVtYmVyO1xyXG4gICAgbmV4dFBhcmFtZXRlckluZGV4OiBudW1iZXI7ICAvLyBUaGUgaW5kZXggb2YgdGhlIHN0YXJ0aW5nIHByb2Nlc3MgcGFyYW1ldGVyc1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlucHV0TGluZXM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dExpbmVzID0gaW5wdXRMaW5lcztcclxuICAgICAgICB0aGlzLm5leHRMaW5lSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMubmV4dFBhcmFtZXRlckluZGV4ID0gMjtcclxuICAgIH1cclxufVxyXG5cclxuLy8gaW5wdXRPcHRpb25cclxuY29uc3QgaW5wdXRPcHRpb24gPSBuZXcgSW5wdXRPcHRpb24oaW5wdXREZWZhdWx0KTtcclxuXHJcbi8vIGlucHV0XHJcbi8vIEV4YW1wbGU6IGNvbnN0IG5hbWUgPSBhd2FpdCBpbnB1dCgnV2hhdCBpcyB5b3VyIG5hbWU/ICcpO1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gIGlucHV0KCBndWlkZTogc3RyaW5nICk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAvLyBJbnB1dCBlbXVsYXRpb25cclxuICAgIGlmIChpbnB1dE9wdGlvbi5pbnB1dExpbmVzKSB7XHJcbiAgICAgICAgaWYgKGlucHV0T3B0aW9uLm5leHRMaW5lSW5kZXggPCBpbnB1dE9wdGlvbi5pbnB1dExpbmVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCAgdmFsdWUgPSBpbnB1dE9wdGlvbi5pbnB1dExpbmVzW2lucHV0T3B0aW9uLm5leHRMaW5lSW5kZXhdO1xyXG4gICAgICAgICAgICBpbnB1dE9wdGlvbi5uZXh0TGluZUluZGV4ICs9IDE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGd1aWRlICsgdmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuICB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVhZCB0aGUgc3RhcnRpbmcgcHJvY2VzcyBwYXJhbWV0ZXJzXHJcbiAgICB3aGlsZSAoaW5wdXRPcHRpb24ubmV4dFBhcmFtZXRlckluZGV4IDwgcHJvY2Vzcy5hcmd2Lmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0ICB2YWx1ZSA9IHByb2Nlc3MuYXJndltpbnB1dE9wdGlvbi5uZXh0UGFyYW1ldGVySW5kZXhdO1xyXG4gICAgICAgIGlucHV0T3B0aW9uLm5leHRQYXJhbWV0ZXJJbmRleCArPSAxO1xyXG4gICAgICAgIGlmICh2YWx1ZS5zdWJzdHIoMCwxKSAhPT0gJy0nKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGd1aWRlICsgdmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuICB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSAnLS10ZXN0Jykge1xyXG4gICAgICAgICAgICBpbnB1dE9wdGlvbi5uZXh0UGFyYW1ldGVySW5kZXggKz0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaW5wdXRcclxuICAgIHJldHVybiAgSW5wdXRPYmplY3QuaW5wdXQoZ3VpZGUpO1xyXG59XHJcbmNvbnN0ICBJbnB1dE9iamVjdCA9IG5ldyBTdGFuZGFyZElucHV0QnVmZmVyKCk7XHJcbmV4cG9ydCBmdW5jdGlvbiAgZ2V0SW5wdXRPYmplY3QoKTogU3RhbmRhcmRJbnB1dEJ1ZmZlciB7XHJcbiAgICByZXR1cm4gIElucHV0T2JqZWN0O1xyXG59XHJcblxyXG4vLyBpbnB1dFBhdGhcclxuLy8gRXhhbXBsZTogY29uc3QgbmFtZSA9IGF3YWl0IGlucHV0KCdXaGF0IGlzIHlvdXIgbmFtZT8gJyk7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiAgaW5wdXRQYXRoKCBndWlkZTogc3RyaW5nICkge1xyXG4gICAgY29uc3QgIGtleSA9IGF3YWl0IGlucHV0KGd1aWRlKTtcclxuICAgIGlmIChrZXkuZW5kc1dpdGgoJygpJykpIHtcclxuICAgICAgICByZXR1cm4gIGtleTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICBwYXRoUmVzb2x2ZShrZXkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBpbnB1dFNraXBcclxuZXhwb3J0IGZ1bmN0aW9uICBpbnB1dFNraXAoY291bnQ6IG51bWJlcikge1xyXG4gICAgaW5wdXRPcHRpb24ubmV4dFBhcmFtZXRlckluZGV4ICs9IGNvdW50O1xyXG59XHJcblxyXG4vLyBwYXRoUmVzb2x2ZVxyXG5leHBvcnQgZnVuY3Rpb24gIHBhdGhSZXNvbHZlKHBhdGhfOiBzdHJpbmcpIHtcclxuXHJcbiAgICAvLyAnL2MvaG9tZScgZm9ybWF0IHRvIGN1cnJlbnQgT1MgZm9ybWF0XHJcbiAgICBpZiAocGF0aF8ubGVuZ3RoID49IDMpIHtcclxuICAgICAgICBpZiAocGF0aF9bMF0gPT09ICcvJyAgJiYgIHBhdGhfWzJdID09PSAnLycpIHtcclxuICAgICAgICAgICAgcGF0aF8gPSBwYXRoX1sxXSArJzonKyBwYXRoXy5zdWJzdHIoMik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlcGxhY2Ugc2VwYXJhdG9ycyB0byBPUyBmb3JtYXRcclxuICAgIHBhdGhfID0gcGF0aC5yZXNvbHZlKHBhdGhfKTtcclxuXHJcbiAgICByZXR1cm4gcGF0aF9cclxufVxyXG5cclxuLy8gY2hlY2tOb3RJbkdpdFdvcmtpbmdcclxuZXhwb3J0IGZ1bmN0aW9uICBjaGVja05vdEluR2l0V29ya2luZygpIHtcclxuICAgIHZhciAgcGF0aF8gPSBwcm9jZXNzLmN3ZCgpO1xyXG5cclxuICAgIGlmICggISBwYXRoXy5pbmNsdWRlcygnZXh0cmFjdF9naXRfYnJhbmNoZXMnKSkge1xyXG4gICAgICAgIHRocm93ICBuZXcgRXJyb3IoJ1RoaXMgaXMgbm90IGluIHByb2plY3QgZm9sZGVyLicpXHJcbiAgICB9XHJcbiAgICB3aGlsZSAocGF0aF8uaW5jbHVkZXMoJ2V4dHJhY3RfZ2l0X2JyYW5jaGVzJykpIHtcclxuICAgICAgICBwYXRoXyA9IHBhdGguZGlybmFtZShwYXRoXyk7XHJcbiAgICB9XHJcbiAgICB3aGlsZSAocGF0aF8gIT09ICcvJykge1xyXG5cclxuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhgJHtwYXRoX30vLmdpdGApKSB7XHJcbiAgICAgICAgICAgIHRocm93ICBuZXcgRXJyb3IoJ1RoaXMgdGVzdCBpcyBub3Qgc3VwcG9ydGVkIHdpdGggZ2l0IHN1Ym1vZHVsZS4nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBwYXRoXyA9IHBhdGguZGlybmFtZShwYXRoXyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGdldFRlc3RXb3JrRm9sZGVyRnVsbFBhdGhcclxuZXhwb3J0IGZ1bmN0aW9uICBnZXRUZXN0V29ya0ZvbGRlckZ1bGxQYXRoKCk6IHN0cmluZyB7XHJcbiAgICB2YXIgIHBhdGhfID0gcHJvY2Vzcy5jd2QoKTtcclxuXHJcbiAgICBpZiAoICEgcGF0aF8uaW5jbHVkZXMoJ2V4dHJhY3RfZ2l0X2JyYW5jaGVzJykpIHtcclxuICAgICAgICB0aHJvdyAgbmV3IEVycm9yKCdUaGlzIGlzIG5vdCBpbiBwcm9qZWN0IGZvbGRlci4nKVxyXG4gICAgfVxyXG4gICAgd2hpbGUgKHBhdGhfLmluY2x1ZGVzKCdleHRyYWN0X2dpdF9icmFuY2hlcycpKSB7XHJcbiAgICAgICAgcGF0aF8gPSBwYXRoLmRpcm5hbWUocGF0aF8pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAgYCR7cGF0aF99L190ZXN0X29mX2V4dHJhY3RfZ2l0X2JyYW5jaGVzYDtcclxufVxyXG5cclxuLy8gcHBcclxuLy8gRGVidWcgcHJpbnQuXHJcbi8vICNrZXl3b3JkOiBwcFxyXG4vLyBFeGFtcGxlOlxyXG4vLyAgICBwcCh2YXIpO1xyXG4vLyBFeGFtcGxlOlxyXG4vLyAgICB2YXIgZCA9IHBwKHZhcik7XHJcbi8vICAgIGQgPSBkOyAgLy8gU2V0IGJyZWFrIHBvaW50IGhlcmUgYW5kIHdhdGNoIHRoZSB2YXJpYWJsZSBkXHJcbi8vIEV4YW1wbGU6XHJcbi8vICAgIHRyeSB7XHJcbi8vXHJcbi8vICAgICAgICBhd2FpdCBtYWluKCk7XHJcbi8vICAgIH0gZmluYWxseSB7XHJcbi8vICAgICAgICB2YXIgZCA9IHBwKCcnKTtcclxuLy8gICAgICAgIGQgPSBbXTsgIC8vIFNldCBicmVhayBwb2ludCBoZXJlIGFuZCB3YXRjaCB0aGUgdmFyaWFibGUgZFxyXG4vLyAgICB9XHJcbmV4cG9ydCBmdW5jdGlvbiAgcHAobWVzc2FnZTogYW55KSB7XHJcbiAgICBpZiAodHlwZW9mIG1lc3NhZ2UgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgbWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgZGVidWdPdXQucHVzaChtZXNzYWdlLnRvU3RyaW5nKCkpO1xyXG4gICAgcmV0dXJuIGRlYnVnT3V0O1xyXG59XHJcbmV4cG9ydCBjb25zdCAgZGVidWdPdXQ6IHN0cmluZ1tdID0gW107XHJcblxyXG4vLyBjY1xyXG4vLyBUaHJvdWdoIGNvdW50ZXIuXHJcbi8vICNrZXl3b3JkOiBjY1xyXG4vLyBFeGFtcGxlOlxyXG4vLyAgIGNjKCk7XHJcbi8vIEV4YW1wbGU6XHJcbi8vICAgdmFyIGMgPSBjYygpLmRlYnVnT3V0OyAgLy8gU2V0IGJyZWFrIHBvaW50IGhlcmUgYW5kIHdhdGNoIHRoZSB2YXJpYWJsZSBjXHJcbi8vIEV4YW1wbGU6XHJcbi8vICAgaWYgKCBjYygyKS5pc1RhcmdldCApXHJcbi8vICAgdmFyIGQgPSBwcCgnJyk7ICAvLyBTZXQgYnJlYWsgcG9pbnQgaGVyZSBhbmQgd2F0Y2ggdGhlIHZhcmlhYmxlIGRcclxuZXhwb3J0IGZ1bmN0aW9uICBjYyggdGFyZ2V0Q291bnQ6IG51bWJlciA9IDk5OTk5OTksIGxhYmVsOiBzdHJpbmcgPSAnMCcgKSB7XHJcbiAgICBpZiAoIShsYWJlbCBpbiBnQ291bnQpKSB7XHJcbiAgICAgICAgZ0NvdW50W2xhYmVsXSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ0NvdW50W2xhYmVsXSArPSAxO1xyXG4gICAgcHAoIGAke2xhYmVsfTpjb3VudFRocm91Z2hbJHtsYWJlbH1dID0gJHtnQ291bnRbbGFiZWxdfWAgKTtcclxuICAgIGNvbnN0IGlzVGFyZ2V0ID0gKCBnQ291bnRbbGFiZWxdID09PSB0YXJnZXRDb3VudCApO1xyXG5cclxuICAgIGlmIChpc1RhcmdldCkge1xyXG4gICAgICAgIHBwKCAnICAgICoqKiogSXQgaXMgYmVmb3JlIHRoZSB0YXJnZXQhICoqKionICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gIHsgaXNUYXJnZXQsIGRlYnVnT3V0IH07XHJcbn1cclxuY29uc3QgIGdDb3VudDoge1tuYW1lOiBzdHJpbmddOiBudW1iZXJ9ID0ge307XHJcbiJdfQ==