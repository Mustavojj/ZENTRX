export const APP_CONFIG = {
    APP_NAME: "ZENTRIX",
    BOT_USERNAME: "Zentrxbot",
    MINIMUM_WITHDRAW: 0.03,
    WITHDRAWAL_FEES: 0,
    REFERRAL_PERCENTAGE: 10,
    REFERRAL_POWER_REWARD: 3000,
    MINING_SESSION_HOURS: 5,
    POWER_PER_TON_RATE: 0.0000125,
    POWER_PER_DAY_RATE: 0.0003,
    TON_PRICE_PER_100: 0.10,
    TASK_VERIFICATION_DELAY: 10,
    DEFAULT_USER_AVATAR: "https://i.ibb.co/bjyVgYqJ/256e636cf3a0.jpg",
    TON_WALLET_ADDRESS: "UQCrXfE4_ktpwyZJzmGuCt6zXE5mErFV8VczSjEZvRuLy9_q", 
    AD_COOLDOWN_HOURS: 5,
    REWARD_AD_BLOCK_ID: "34446",
    INTERSTITIAL_AD_BLOCK_ID: "int-34445",
    BOT_LINK: "https://t.me/Zentrxbot/mine?startapp=",
    TON_CONNECT_MANIFEST: "https://zentrix.vercel.app/tonconnect-manifest.json", 
    DAILY_CHECK_NEWS_LINK: "https://t.me/Zentrxb",
    STAR_PRICE_PER_100: 1,
    REFERRAL_REQUIRED_TASKS: 5,
    REFERRAL_REQUIRED_MINES: 2,
    CRYPTO_BOT_TOKEN: "593486:AAgnc7TtIM9ay5Vwam3vPkqvwSPyT5YcV5q", 
    TASK_REWARD: 100,
    TASK_IMAGE: "https://i.ibb.co/bjyVgYqJ/256e636cf3a0.jpg",
    DAILY_TASKS: [
        { id: "daily_check_news", name: "Daily Check News", url: "https://t.me/Zentrxb", reward: 100, verify: true, icon: "fa-newspaper" },
        ],
    MAIN_TASKS: [
        { id: "money_hub", name: "MONEY HUB", url: "https://t.me/MONEYHUB9_69", reward: 100, verify: true },
        { id: "ton_labs", name: "TON LABS", url: "https://t.me/TonLabstg", reward: 100, verify: true },
        { id: "gorilla", name: "GORILLA", url: "https://t.me/ZOBRABZA", reward: 100, verify: true },
        { id: "get_ref", name: "GET REFERRALS", url: "https://t.me/NEJARS", reward: 100, verify: true },
        { id: "ref_all1", name: "GET REFERRALS 1", url: "https://t.me/getrefss190", reward: 100, verify: false },
        { id: "ref_all2", name: "GET REFERRALS 2", url: "https://t.me/EarnReffers", reward: 100, verify: false }
    ],
    QUESTS: {
        welcome_bonus: { reward: 3000, type: "power" },
        level_quests: [
            { target_level: 2, reward: 1000 },
            { target_level: 3, reward: 2000 },
            { target_level: 4, reward: 3000 },
            { target_level: 5, reward: 3000 },
            { target_level: 6, reward: 3000 },
            { target_level: 7, reward: 3000 },
            { target_level: 8, reward: 3000 },
            { target_level: 9, reward: 3000 },
            { target_level: 10, reward: 3000 }
        ],
        mining_quests: [
            { target_starts: 3, reward: 1000 },
            { target_starts: 5, reward: 2000 },
            { target_starts: 10, reward: 3000 },
            { target_starts: 20, reward: 3000 },
            { target_starts: 30, reward: 3000 },
            { target_starts: 40, reward: 3000 },
            { target_starts: 50, reward: 3000 },
            { target_starts: 75, reward: 3000 },
            { target_starts: 100, reward: 3000 }
        ]
    }
};
