// Generated from gram.txt by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002!\u0128\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0003\u0002\u0006\u0002C\n\u0002",
    "\r\u0002\u000e\u0002D\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0007\u0003M\n\u0003\f\u0003\u000e\u0003P\u000b",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003V",
    "\n\u0003\f\u0003\u000e\u0003Y\u000b\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u0003]\n\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0006",
    "\r\u0081\n\r\r\r\u000e\r\u0082\u0003\r\u0003\r\u0007\r\u0087\n\r\f\r",
    "\u000e\r\u008a\u000b\r\u0003\r\u0003\r\u0006\r\u008e\n\r\r\r\u000e\r",
    "\u008f\u0005\r\u0092\n\r\u0003\r\u0003\r\u0005\r\u0096\n\r\u0003\r\u0006",
    "\r\u0099\n\r\r\r\u000e\r\u009a\u0005\r\u009d\n\r\u0003\r\u0005\r\u00a0",
    "\n\r\u0003\r\u0006\r\u00a3\n\r\r\r\u000e\r\u00a4\u0003\r\u0003\r\u0005",
    "\r\u00a9\n\r\u0003\r\u0006\r\u00ac\n\r\r\r\u000e\r\u00ad\u0005\r\u00b0",
    "\n\r\u0003\u000e\u0006\u000e\u00b3\n\u000e\r\u000e\u000e\u000e\u00b4",
    "\u0003\u000e\u0005\u000e\u00b8\n\u000e\u0003\u000e\u0006\u000e\u00bb",
    "\n\u000e\r\u000e\u000e\u000e\u00bc\u0005\u000e\u00bf\n\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0005\u0012\u00d5\n\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003",
    "\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0007\u0019\u00f9\n\u0019\f\u0019\u000e\u0019\u00fc",
    "\u000b\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003 \u0003 \u0007 \u0124\n \f \u000e \u0127\u000b \u0003",
    "W\u0002!\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b",
    "\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f",
    "\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017",
    "-\u0018/\u00191\u001a3\u001b5\u001c7\u001d9\u001e;\u001f= ?!\u0003\u0002",
    "\u0011\u0005\u0002\u000b\f\u000f\u000f\"\"\u0003\u0002\f\f\u0003\u0002",
    "**\u0003\u0002++\u0003\u0002}}\u0003\u0002\u007f\u007f\u0003\u00022",
    ";\u0004\u0002GGgg\u0004\u0002--//\u0004\u0002>>@@\u0003\u0002--\u0005",
    "\u0002\'\',,11\u0003\u0002$$\u0005\u0002C\\aac|\u0006\u00022;C\\aac",
    "|\u0002\u0142\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003",
    "\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003",
    "\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003",
    "\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003",
    "\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003",
    "\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003",
    "\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002",
    "\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002",
    "\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002\u0002",
    "\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002\u0002",
    "3\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002\u0002\u00027\u0003",
    "\u0002\u0002\u0002\u00029\u0003\u0002\u0002\u0002\u0002;\u0003\u0002",
    "\u0002\u0002\u0002=\u0003\u0002\u0002\u0002\u0002?\u0003\u0002\u0002",
    "\u0002\u0003B\u0003\u0002\u0002\u0002\u0005\\\u0003\u0002\u0002\u0002",
    "\u0007`\u0003\u0002\u0002\u0002\tb\u0003\u0002\u0002\u0002\u000bh\u0003",
    "\u0002\u0002\u0002\rj\u0003\u0002\u0002\u0002\u000fl\u0003\u0002\u0002",
    "\u0002\u0011o\u0003\u0002\u0002\u0002\u0013t\u0003\u0002\u0002\u0002",
    "\u0015{\u0003\u0002\u0002\u0002\u0017}\u0003\u0002\u0002\u0002\u0019",
    "\u00af\u0003\u0002\u0002\u0002\u001b\u00be\u0003\u0002\u0002\u0002\u001d",
    "\u00c0\u0003\u0002\u0002\u0002\u001f\u00c3\u0003\u0002\u0002\u0002!",
    "\u00c7\u0003\u0002\u0002\u0002#\u00d4\u0003\u0002\u0002\u0002%\u00d6",
    "\u0003\u0002\u0002\u0002\'\u00d8\u0003\u0002\u0002\u0002)\u00da\u0003",
    "\u0002\u0002\u0002+\u00dc\u0003\u0002\u0002\u0002-\u00de\u0003\u0002",
    "\u0002\u0002/\u00e0\u0003\u0002\u0002\u00021\u00f4\u0003\u0002\u0002",
    "\u00023\u00ff\u0003\u0002\u0002\u00025\u0105\u0003\u0002\u0002\u0002",
    "7\u010b\u0003\u0002\u0002\u00029\u0110\u0003\u0002\u0002\u0002;\u0115",
    "\u0003\u0002\u0002\u0002=\u011b\u0003\u0002\u0002\u0002?\u0121\u0003",
    "\u0002\u0002\u0002AC\t\u0002\u0002\u0002BA\u0003\u0002\u0002\u0002C",
    "D\u0003\u0002\u0002\u0002DB\u0003\u0002\u0002\u0002DE\u0003\u0002\u0002",
    "\u0002EF\u0003\u0002\u0002\u0002FG\b\u0002\u0002\u0002G\u0004\u0003",
    "\u0002\u0002\u0002HI\u00071\u0002\u0002IJ\u00071\u0002\u0002JN\u0003",
    "\u0002\u0002\u0002KM\n\u0003\u0002\u0002LK\u0003\u0002\u0002\u0002M",
    "P\u0003\u0002\u0002\u0002NL\u0003\u0002\u0002\u0002NO\u0003\u0002\u0002",
    "\u0002O]\u0003\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002QR\u00071",
    "\u0002\u0002RS\u0007,\u0002\u0002SW\u0003\u0002\u0002\u0002TV\u000b",
    "\u0002\u0002\u0002UT\u0003\u0002\u0002\u0002VY\u0003\u0002\u0002\u0002",
    "WX\u0003\u0002\u0002\u0002WU\u0003\u0002\u0002\u0002XZ\u0003\u0002\u0002",
    "\u0002YW\u0003\u0002\u0002\u0002Z[\u0007,\u0002\u0002[]\u00071\u0002",
    "\u0002\\H\u0003\u0002\u0002\u0002\\Q\u0003\u0002\u0002\u0002]^\u0003",
    "\u0002\u0002\u0002^_\b\u0003\u0002\u0002_\u0006\u0003\u0002\u0002\u0002",
    "`a\u0007=\u0002\u0002a\b\u0003\u0002\u0002\u0002bc\u0007y\u0002\u0002",
    "cd\u0007j\u0002\u0002de\u0007k\u0002\u0002ef\u0007n\u0002\u0002fg\u0007",
    "g\u0002\u0002g\n\u0003\u0002\u0002\u0002hi\t\u0004\u0002\u0002i\f\u0003",
    "\u0002\u0002\u0002jk\t\u0005\u0002\u0002k\u000e\u0003\u0002\u0002\u0002",
    "lm\u0007k\u0002\u0002mn\u0007h\u0002\u0002n\u0010\u0003\u0002\u0002",
    "\u0002op\u0007g\u0002\u0002pq\u0007n\u0002\u0002qr\u0007u\u0002\u0002",
    "rs\u0007g\u0002\u0002s\u0012\u0003\u0002\u0002\u0002tu\u0007t\u0002",
    "\u0002uv\u0007g\u0002\u0002vw\u0007v\u0002\u0002wx\u0007w\u0002\u0002",
    "xy\u0007t\u0002\u0002yz\u0007p\u0002\u0002z\u0014\u0003\u0002\u0002",
    "\u0002{|\t\u0006\u0002\u0002|\u0016\u0003\u0002\u0002\u0002}~\t\u0007",
    "\u0002\u0002~\u0018\u0003\u0002\u0002\u0002\u007f\u0081\t\b\u0002\u0002",
    "\u0080\u007f\u0003\u0002\u0002\u0002\u0081\u0082\u0003\u0002\u0002\u0002",
    "\u0082\u0080\u0003\u0002\u0002\u0002\u0082\u0083\u0003\u0002\u0002\u0002",
    "\u0083\u0084\u0003\u0002\u0002\u0002\u0084\u0088\u00070\u0002\u0002",
    "\u0085\u0087\t\b\u0002\u0002\u0086\u0085\u0003\u0002\u0002\u0002\u0087",
    "\u008a\u0003\u0002\u0002\u0002\u0088\u0086\u0003\u0002\u0002\u0002\u0088",
    "\u0089\u0003\u0002\u0002\u0002\u0089\u0092\u0003\u0002\u0002\u0002\u008a",
    "\u0088\u0003\u0002\u0002\u0002\u008b\u008d\u00070\u0002\u0002\u008c",
    "\u008e\t\b\u0002\u0002\u008d\u008c\u0003\u0002\u0002\u0002\u008e\u008f",
    "\u0003\u0002\u0002\u0002\u008f\u008d\u0003\u0002\u0002\u0002\u008f\u0090",
    "\u0003\u0002\u0002\u0002\u0090\u0092\u0003\u0002\u0002\u0002\u0091\u0080",
    "\u0003\u0002\u0002\u0002\u0091\u008b\u0003\u0002\u0002\u0002\u0092\u009c",
    "\u0003\u0002\u0002\u0002\u0093\u0095\t\t\u0002\u0002\u0094\u0096\t\n",
    "\u0002\u0002\u0095\u0094\u0003\u0002\u0002\u0002\u0095\u0096\u0003\u0002",
    "\u0002\u0002\u0096\u0098\u0003\u0002\u0002\u0002\u0097\u0099\t\b\u0002",
    "\u0002\u0098\u0097\u0003\u0002\u0002\u0002\u0099\u009a\u0003\u0002\u0002",
    "\u0002\u009a\u0098\u0003\u0002\u0002\u0002\u009a\u009b\u0003\u0002\u0002",
    "\u0002\u009b\u009d\u0003\u0002\u0002\u0002\u009c\u0093\u0003\u0002\u0002",
    "\u0002\u009c\u009d\u0003\u0002\u0002\u0002\u009d\u00b0\u0003\u0002\u0002",
    "\u0002\u009e\u00a0\u0007/\u0002\u0002\u009f\u009e\u0003\u0002\u0002",
    "\u0002\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0\u00a2\u0003\u0002\u0002",
    "\u0002\u00a1\u00a3\t\b\u0002\u0002\u00a2\u00a1\u0003\u0002\u0002\u0002",
    "\u00a3\u00a4\u0003\u0002\u0002\u0002\u00a4\u00a2\u0003\u0002\u0002\u0002",
    "\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5\u00a6\u0003\u0002\u0002\u0002",
    "\u00a6\u00a8\t\t\u0002\u0002\u00a7\u00a9\t\n\u0002\u0002\u00a8\u00a7",
    "\u0003\u0002\u0002\u0002\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9\u00ab",
    "\u0003\u0002\u0002\u0002\u00aa\u00ac\t\b\u0002\u0002\u00ab\u00aa\u0003",
    "\u0002\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002\u00ad\u00ab\u0003",
    "\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae\u00b0\u0003",
    "\u0002\u0002\u0002\u00af\u0091\u0003\u0002\u0002\u0002\u00af\u009f\u0003",
    "\u0002\u0002\u0002\u00b0\u001a\u0003\u0002\u0002\u0002\u00b1\u00b3\t",
    "\b\u0002\u0002\u00b2\u00b1\u0003\u0002\u0002\u0002\u00b3\u00b4\u0003",
    "\u0002\u0002\u0002\u00b4\u00b2\u0003\u0002\u0002\u0002\u00b4\u00b5\u0003",
    "\u0002\u0002\u0002\u00b5\u00bf\u0003\u0002\u0002\u0002\u00b6\u00b8\u0007",
    "/\u0002\u0002\u00b7\u00b6\u0003\u0002\u0002\u0002\u00b7\u00b8\u0003",
    "\u0002\u0002\u0002\u00b8\u00ba\u0003\u0002\u0002\u0002\u00b9\u00bb\t",
    "\b\u0002\u0002\u00ba\u00b9\u0003\u0002\u0002\u0002\u00bb\u00bc\u0003",
    "\u0002\u0002\u0002\u00bc\u00ba\u0003\u0002\u0002\u0002\u00bc\u00bd\u0003",
    "\u0002\u0002\u0002\u00bd\u00bf\u0003\u0002\u0002\u0002\u00be\u00b2\u0003",
    "\u0002\u0002\u0002\u00be\u00b7\u0003\u0002\u0002\u0002\u00bf\u001c\u0003",
    "\u0002\u0002\u0002\u00c0\u00c1\u0007q\u0002\u0002\u00c1\u00c2\u0007",
    "t\u0002\u0002\u00c2\u001e\u0003\u0002\u0002\u0002\u00c3\u00c4\u0007",
    "c\u0002\u0002\u00c4\u00c5\u0007p\u0002\u0002\u00c5\u00c6\u0007f\u0002",
    "\u0002\u00c6 \u0003\u0002\u0002\u0002\u00c7\u00c8\u0007p\u0002\u0002",
    "\u00c8\u00c9\u0007q\u0002\u0002\u00c9\u00ca\u0007v\u0002\u0002\u00ca",
    "\"\u0003\u0002\u0002\u0002\u00cb\u00cc\u0007@\u0002\u0002\u00cc\u00d5",
    "\u0007?\u0002\u0002\u00cd\u00ce\u0007>\u0002\u0002\u00ce\u00d5\u0007",
    "?\u0002\u0002\u00cf\u00d5\t\u000b\u0002\u0002\u00d0\u00d1\u0007#\u0002",
    "\u0002\u00d1\u00d5\u0007?\u0002\u0002\u00d2\u00d3\u0007?\u0002\u0002",
    "\u00d3\u00d5\u0007?\u0002\u0002\u00d4\u00cb\u0003\u0002\u0002\u0002",
    "\u00d4\u00cd\u0003\u0002\u0002\u0002\u00d4\u00cf\u0003\u0002\u0002\u0002",
    "\u00d4\u00d0\u0003\u0002\u0002\u0002\u00d4\u00d2\u0003\u0002\u0002\u0002",
    "\u00d5$\u0003\u0002\u0002\u0002\u00d6\u00d7\u0007?\u0002\u0002\u00d7",
    "&\u0003\u0002\u0002\u0002\u00d8\u00d9\t\f\u0002\u0002\u00d9(\u0003\u0002",
    "\u0002\u0002\u00da\u00db\t\r\u0002\u0002\u00db*\u0003\u0002\u0002\u0002",
    "\u00dc\u00dd\u0007/\u0002\u0002\u00dd,\u0003\u0002\u0002\u0002\u00de",
    "\u00df\u0007.\u0002\u0002\u00df.\u0003\u0002\u0002\u0002\u00e0\u00e1",
    "\u0007*\u0002\u0002\u00e1\u00e2\u0007k\u0002\u0002\u00e2\u00e3\u0007",
    "p\u0002\u0002\u00e3\u00e4\u0007v\u0002\u0002\u00e4\u00e5\u0007~\u0002",
    "\u0002\u00e5\u00e6\u0007u\u0002\u0002\u00e6\u00e7\u0007v\u0002\u0002",
    "\u00e7\u00e8\u0007t\u0002\u0002\u00e8\u00e9\u0007k\u0002\u0002\u00e9",
    "\u00ea\u0007p\u0002\u0002\u00ea\u00eb\u0007i\u0002\u0002\u00eb\u00ec",
    "\u0007~\u0002\u0002\u00ec\u00ed\u0007f\u0002\u0002\u00ed\u00ee\u0007",
    "q\u0002\u0002\u00ee\u00ef\u0007w\u0002\u0002\u00ef\u00f0\u0007d\u0002",
    "\u0002\u00f0\u00f1\u0007n\u0002\u0002\u00f1\u00f2\u0007g\u0002\u0002",
    "\u00f2\u00f3\u0007+\u0002\u0002\u00f30\u0003\u0002\u0002\u0002\u00f4",
    "\u00fa\u0007$\u0002\u0002\u00f5\u00f6\u0007^\u0002\u0002\u00f6\u00f9",
    "\u0007$\u0002\u0002\u00f7\u00f9\n\u000e\u0002\u0002\u00f8\u00f5\u0003",
    "\u0002\u0002\u0002\u00f8\u00f7\u0003\u0002\u0002\u0002\u00f9\u00fc\u0003",
    "\u0002\u0002\u0002\u00fa\u00f8\u0003\u0002\u0002\u0002\u00fa\u00fb\u0003",
    "\u0002\u0002\u0002\u00fb\u00fd\u0003\u0002\u0002\u0002\u00fc\u00fa\u0003",
    "\u0002\u0002\u0002\u00fd\u00fe\u0007$\u0002\u0002\u00fe2\u0003\u0002",
    "\u0002\u0002\u00ff\u0100\u0007r\u0002\u0002\u0100\u0101\u0007t\u0002",
    "\u0002\u0101\u0102\u0007k\u0002\u0002\u0102\u0103\u0007p\u0002\u0002",
    "\u0103\u0104\u0007v\u0002\u0002\u01044\u0003\u0002\u0002\u0002\u0105",
    "\u0106\u0007k\u0002\u0002\u0106\u0107\u0007p\u0002\u0002\u0107\u0108",
    "\u0007r\u0002\u0002\u0108\u0109\u0007w\u0002\u0002\u0109\u010a\u0007",
    "v\u0002\u0002\u010a6\u0003\u0002\u0002\u0002\u010b\u010c\u0007q\u0002",
    "\u0002\u010c\u010d\u0007r\u0002\u0002\u010d\u010e\u0007g\u0002\u0002",
    "\u010e\u010f\u0007p\u0002\u0002\u010f8\u0003\u0002\u0002\u0002\u0110",
    "\u0111\u0007t\u0002\u0002\u0111\u0112\u0007g\u0002\u0002\u0112\u0113",
    "\u0007c\u0002\u0002\u0113\u0114\u0007f\u0002\u0002\u0114:\u0003\u0002",
    "\u0002\u0002\u0115\u0116\u0007y\u0002\u0002\u0116\u0117\u0007t\u0002",
    "\u0002\u0117\u0118\u0007k\u0002\u0002\u0118\u0119\u0007v\u0002\u0002",
    "\u0119\u011a\u0007g\u0002\u0002\u011a<\u0003\u0002\u0002\u0002\u011b",
    "\u011c\u0007e\u0002\u0002\u011c\u011d\u0007n\u0002\u0002\u011d\u011e",
    "\u0007q\u0002\u0002\u011e\u011f\u0007u\u0002\u0002\u011f\u0120\u0007",
    "g\u0002\u0002\u0120>\u0003\u0002\u0002\u0002\u0121\u0125\t\u000f\u0002",
    "\u0002\u0122\u0124\t\u0010\u0002\u0002\u0123\u0122\u0003\u0002\u0002",
    "\u0002\u0124\u0127\u0003\u0002\u0002\u0002\u0125\u0123\u0003\u0002\u0002",
    "\u0002\u0125\u0126\u0003\u0002\u0002\u0002\u0126@\u0003\u0002\u0002",
    "\u0002\u0127\u0125\u0003\u0002\u0002\u0002\u001b\u0002DNW\\\u0082\u0088",
    "\u008f\u0091\u0095\u009a\u009c\u009f\u00a4\u00a8\u00ad\u00af\u00b4\u00b7",
    "\u00bc\u00be\u00d4\u00f8\u00fa\u0125\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function gramLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

gramLexer.prototype = Object.create(antlr4.Lexer.prototype);
gramLexer.prototype.constructor = gramLexer;

Object.defineProperty(gramLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

gramLexer.EOF = antlr4.Token.EOF;
gramLexer.WHITESPACE = 1;
gramLexer.COMMENT = 2;
gramLexer.SEMI = 3;
gramLexer.WHILE = 4;
gramLexer.LP = 5;
gramLexer.RP = 6;
gramLexer.IF = 7;
gramLexer.ELSE = 8;
gramLexer.RETURN = 9;
gramLexer.LBR = 10;
gramLexer.RBR = 11;
gramLexer.FPNUM = 12;
gramLexer.NUM = 13;
gramLexer.OR = 14;
gramLexer.AND = 15;
gramLexer.NOT = 16;
gramLexer.RELOP = 17;
gramLexer.EQ = 18;
gramLexer.PLUS = 19;
gramLexer.MULOP = 20;
gramLexer.MINUS = 21;
gramLexer.CMA = 22;
gramLexer.TYPE = 23;
gramLexer.STRINGCONST = 24;
gramLexer.PRINT = 25;
gramLexer.INPUT = 26;
gramLexer.OPEN = 27;
gramLexer.READ = 28;
gramLexer.WRITE = 29;
gramLexer.CLOSE = 30;
gramLexer.ID = 31;

gramLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

gramLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

gramLexer.prototype.literalNames = [ null, null, null, "';'", "'while'", 
                                     null, null, "'if'", "'else'", "'return'", 
                                     null, null, null, null, "'or'", "'and'", 
                                     "'not'", null, "'='", null, null, "'-'", 
                                     "','", "'(int|string|double)'", null, 
                                     "'print'", "'input'", "'open'", "'read'", 
                                     "'write'", "'close'" ];

gramLexer.prototype.symbolicNames = [ null, "WHITESPACE", "COMMENT", "SEMI", 
                                      "WHILE", "LP", "RP", "IF", "ELSE", 
                                      "RETURN", "LBR", "RBR", "FPNUM", "NUM", 
                                      "OR", "AND", "NOT", "RELOP", "EQ", 
                                      "PLUS", "MULOP", "MINUS", "CMA", "TYPE", 
                                      "STRINGCONST", "PRINT", "INPUT", "OPEN", 
                                      "READ", "WRITE", "CLOSE", "ID" ];

gramLexer.prototype.ruleNames = [ "WHITESPACE", "COMMENT", "SEMI", "WHILE", 
                                  "LP", "RP", "IF", "ELSE", "RETURN", "LBR", 
                                  "RBR", "FPNUM", "NUM", "OR", "AND", "NOT", 
                                  "RELOP", "EQ", "PLUS", "MULOP", "MINUS", 
                                  "CMA", "TYPE", "STRINGCONST", "PRINT", 
                                  "INPUT", "OPEN", "READ", "WRITE", "CLOSE", 
                                  "ID" ];

gramLexer.prototype.grammarFileName = "gram.txt";


exports.gramLexer = gramLexer;

