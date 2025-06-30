export default function ActivityChart() {
  return (
    <div className="my-4 px-[4vw] py-[4vw]">
      <div className="flex">
        <svg height="400" viewBox="0 0 1200 400">
          <defs>
            <linearGradient id="logsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <g stroke="#374151" strokeWidth="1" opacity="0.3">
            <line x1="60" y1="350" x2="1140" y2="350" />
            <line x1="60" y1="280" x2="1140" y2="280" />
            <line x1="60" y1="210" x2="1140" y2="210" />
            <line x1="60" y1="140" x2="1140" y2="140" />
            <line x1="60" y1="70" x2="1140" y2="70" />
          </g>

          {/* Y-axis labels */}
          <g fontSize="14" fill="#9ca3af" textAnchor="end">
            <text x="55" y="355">
              0
            </text>
            <text x="55" y="285">
              100
            </text>
            <text x="55" y="215">
              200
            </text>
            <text x="55" y="145">
              300
            </text>
            <text x="55" y="75">
              400+
            </text>
          </g>

          {/* X-axis labels */}
          <g fontSize="14" fill="#9ca3af" textAnchor="middle">
            <text x="120" y="380">
              Jun
            </text>
            <text x="200" y="380">
              Jul
            </text>
            <text x="320" y="380">
              Aug
            </text>
            <text x="440" y="380">
              Sep
            </text>
            <text x="560" y="380">
              Oct
            </text>
            <text x="680" y="380">
              Nov
            </text>
            <text x="800" y="380">
              Dec
            </text>
            <text x="920" y="380">
              Jan
            </text>
            <text x="1040" y="380">
              Feb
            </text>
            <text x="1120" y="380">
              Mar
            </text>
          </g>

          {/* Daily line (precise data points) */}
          <polyline
            points="80,349.7 84,349.7 88,349.4 92,349.7 96,349.7 100,349.4 112,348.4 120,349.7 128,340 140,347 144,349.7 160,328 168,322 176,178.4 184,290 192,140 200,310 208,320 216,230 224,195 232,185 240,267 248,283 256,295 264,266 280,323 288,310 296,300 304,303 312,180 320,238 328,267 336,318 344,318 352,320 360,240 368,240 376,339 384,294 392,349.7 400,347 408,323 416,340 424,338 432,338 440,230 448,294 456,348.4 464,348.8 472,303 480,340 488,320 496,287 504,310 512,349.7 520,287 528,270 536,317 544,287 552,349.7 560,292 568,322 576,324 584,326 592,338 600,349.1 608,331 616,349.1 624,245 632,285 640,318 648,270 656,190 664,185 672,318 680,292 688,336 696,270 704,310 712,185 720,206 728,268 736,322 744,326 752,310 760,349.1 768,294 776,317 784,339 792,270 800,298 808,306 816,308 824,339 832,303 840,349.4 848,331 856,283 864,322 872,298 880,349.4 888,331 896,326 904,317 912,340 920,195 924,318 928,125 936,292 944,318 952,230 960,187 968,283 976,349.1 984,270 992,331 1000,310 1008,349.1 1016,326 1024,338 1032,331 1040,283 1048,331 1056,324 1064,339 1072,310 1080,62 1088,331 1096,349.4 1104,317 1112,349.7 1120,318"
            fill="none"
            stroke="#ec4899"
            strokeWidth="1"
            opacity="0.6"
          />

          {/* Overall trendline */}
          {/* <line
            x1="80"
            y1="340"
            x2="1120"
            y2="250"
            stroke="#fbbf24"
            strokeWidth="2"
            strokeDasharray="10,5"
            opacity="0.8"
          /> */}

          {/* 7-day average line excluding outliers */}
          <polyline
            points="120,332 124,330 129,326 133,322 138,319 142,325 146,316 151,312 155,310 160,312 164,314 169,316 173,320 177,325 182,330 186,330 191,330 195,329 200,324 204,321 208,319 213,318 217,314 222,312 226,311 230,316 235,315 239,319 244,322 248,328 253,333 257,338 261,339 266,343 270,337 275,334 279,335 284,337 288,335 292,335 297,332 301,337 306,338 310,332 315,332 319,332 323,332 328,334 332,334 337,335 341,340 346,340 350,341 354,342 359,342 363,342 368,343 372,343 377,344 381,344 385,344 390,345 394,345 399,344 403,344 408,344 412,343 416,344 421,342 425,338 430,338 434,338 439,337 443,334 447,330 452,327 456,330 461,332 465,331 470,330 474,333 478,335 483,337 487,337 492,334 496,332 500,330 505,329 509,324 514,324 518,326 523,327 527,328 531,328 536,327 540,324 545,325 549,321 554,322 558,324 562,325 567,324 571,331 576,330 580,331 585,330 589,330 593,332 598,334 602,334 607,336 611,335 616,337 620,336 624,336 629,338 633,337 638,335 642,334 647,332 651,334 655,333 660,330 664,329 669,331 673,332 678,332 682,332 686,331 691,332 695,333 700,333 704,335 709,336 713,336 717,339 722,336 726,336 731,334 735,334 740,335 744,335 748,335 753,339 757,341 762,343 766,343 770,343 775,343 779,343 784,342 788,341 793,336 797,335 801,331 806,330 810,330 815,331 819,332 824,339 828,339 832,342 837,339 841,335 846,330 850,327 855,324 859,320 863,317 868,317 872,314 877,320 881,323 886,323 890,323 894,323 899,324 903,329 908,330 912,328 917,330 921,333 925,330 930,332 934,333 939,332 943,334 948,333 952,333 956,337 961,337 965,337 970,338 974,335 979,335 983,335 987,333 992,334 996,335 1001,330 1005,332 1010,331 1014,331 1018,333 1023,331 1027,332 1032,335 1036,335 1040,336 1045,337 1049,337 1054,338 1058,336 1063,338 1067,338 1071,337 1076,337 1080,330 1085,322 1089,322 1094,320 1098,317 1102,316 1107,313 1111,317 1116,323 1120,322"
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
            opacity="0.9"
          />

          {/* Milestone vertical lines */}
          <g stroke="#6366f1" strokeWidth="2" opacity="0.7">
            <line x1="570" y1="70" x2="570" y2="350" />
            <line x1="1140" y1="70" x2="1140" y2="350" />
          </g>

          {/* Milestone line labels */}
          <g fontSize="11" fill="#6366f1">
            <text
              x="565"
              y="50"
              textAnchor="end"
              transform="rotate(-90 575 60)"
            >
              Desktop web & waitlist removal
            </text>
            <text
              x="1135"
              y="50"
              textAnchor="end"
              transform="rotate(-90 1145 60)"
            >
              App Store launch
            </text>
          </g>

          {/* Key milestone markers */}
          <circle cx="312" cy="180" r="4" fill="#ef4444" />
          <circle cx="192" cy="140" r="4" fill="#ef4444" />
          <circle cx="1080" cy="62" r="4" fill="#ef4444" />
          <circle cx="928" cy="125" r="4" fill="#ef4444" />

          {/* Milestone labels */}
          <g fontSize="12" fill="#ef4444">
            <text x="317" y="175" textAnchor="start">
              301
            </text>
            <text x="197" y="135" textAnchor="start">
              130
            </text>
            <text x="1085" y="57" textAnchor="start">
              444
            </text>
            <text x="933" y="120" textAnchor="start">
              314
            </text>
          </g>

          {/* Legend */}
          <g fontSize="12" fill="#9ca3af">
            <line
              x1="900"
              y1="30"
              x2="920"
              y2="30"
              stroke="#ec4899"
              strokeWidth="1"
            />
            <text x="925" y="34">
              Daily
            </text>
            <line
              x1="900"
              y1="45"
              x2="920"
              y2="45"
              stroke="#10b981"
              strokeWidth="3"
            />
            <text x="925" y="49">
              7-day avg (excl. outliers)
            </text>
          </g>
        </svg>
        <div className="mt-8 gap-8 flex flex-col">
          <div>
            <div className="text-2xl font-normal text-black">10,190</div>
            <div className="text-sm text-gray-600">Total Reviews</div>
          </div>
          <div>
            <div className="text-2xl font-normal text-black">243</div>
            <div className="text-sm text-gray-600">Average Weekly</div>
          </div>
          <div>
            <div className="text-2xl font-normal text-black">1,110</div>
            <div className="text-sm text-gray-600">Peak Week</div>
          </div>
        </div>
      </div>
      <p className="text-sm opacity-70 mt-4 text-gray-700">
        Daily activity shows volatile spikes while 7-day average (excluding
        outliers) reveals sustained organic growth trend.
      </p>

      {/* Key Metrics */}
    </div>
  );
}
