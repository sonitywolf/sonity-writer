const ASCII = ['\n', ' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~'];

var models = {
    "bigwiki-200-200": {
        chars: ASCII,
        Ns: 200,
        Ni: 96,
        layers: 2,
        path: 'models/bigwiki-200-200',
        name: "Henning Dekant (Retrain)",
        prefix: 'He\'s the reason for the teardrops on my guitar\nThe only thing that keeps me wishing on a wishing star\n'
    },
    "shakespeare-250-250": {
        chars: ASCII,
        Ns: 250,
        Ni: 96,
        layers: 2,
        path: 'models/shakespeare-250-250',
        name: "William Shakespeare",
        prefix: "My parts for thy face for me to alone\nThat such seat a subjects I have said.\n\nCLAUDIUS:\n"
    },


    "dfw-250-250": {
        chars: ASCII,
        Ns: 250,
        Ni: 96,
        layers: 2,
        path: 'models/dfw-250-250',
        name: "David Foster Wallace",
        prefix: "Most of the rest of the page's pictures are of farm-type animals behind wooden fences, looking the way things look that can't smile, that don't know a camera's looking. "
    },

    "rand-250-250": {
        chars: ASCII,
        Ns: 250,
        Ni: 96,
        layers: 2,
        path: 'models/rand-250-250',
        name: "Ayn Rand",
        prefix: "The light was ebbing, and Eddie Willers could not distinguish the bum's face. \n\n"
    },

    "scifi-250-250": {
        chars: ASCII,
        Ns: 250,
        Ni: 96,
        layers: 2,
        path: 'models/scifi-250-250',
        name: "Science Fiction",
        prefix: 'On the second try two of the planes released rockets, which fortunately missed, but this put a different light on the whole thing. A direct hit with a ten inch rocket would be as dangerous as a torpedo. '
    },

    "medical-200-200": {
        chars: ASCII,
        Ns: 200,
        Ni: 96,
        layers: 2,
        path: 'models/medical-200-200',
        name: "Medical Reference",
        prefix: 'Not surprisingly, acetaminophen remains a major cause of overdose and overdose-related liver failure and death in the United States and many other countries. '
    },

    "scotus-250-250": {
        chars: ASCII,
        Ns: 250,
        Ni: 96,
        layers: 2,
        path: 'models/scotus-250-250',
        name: "US Supreme Court",
        prefix: 'The State need not, in other words, issue birth certificates including the female spouses of women who give birth in the State.  '
    },

    "music-raw-250-250": {
        chars: ASCII,
        Ns: 250,
        Ni: 96,
        layers: 2,
        path: 'models/music-raw-250-250',
        name: "Pop Music",
        prefix: 'He\'s the reason for the teardrops on my guitar\nThe only thing that keeps me wishing on a wishing star\n\n\n'
    },
    
    "swift2-250-250": {
        chars: ASCII,
        Ns: 250,
        Ni: 96,
        layers: 2,
        path: 'models/swift2-250-250',
        name: "Taylor Swift",
        prefix: 'He\'s the reason for the teardrops on my guitar\nThe only thing that keeps me wishing on a wishing star\n'
    },

    "eminem2-250-250": {
        chars: ASCII,
        Ns: 250,
        Ni: 96,
        layers: 2,
        path: 'models/eminem2-250-250',
        name: "Eminem",
        prefix: 'He\'s the reason for the teardrops on my guitar\nThe only thing that keeps me wishing on a wishing star\n'
    },

    "tupac2-250-250": {
        chars: ASCII,
        Ns: 250,
        Ni: 96,
        layers: 2,
        path: 'models/tupac2-250-250',
        name: "Tupac Shakur",
        prefix: 'He\'s the reason for the teardrops on my guitar\nThe only thing that keeps me wishing on a wishing star\n'
    },


    "trump-256": {
        chars: ['\n', '\r', ' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '=', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~'],
        Ns: 256,
        Ni: 94,
        path: "models/trump-256",
        name: 'Donald Trump',
        prefix: 'I was always a big fan of Kim Novak and still am—a wonderful actress.\n'
    },

    "linux-250-250": {
        chars: ASCII,
        Ns: 250,
        Ni: 96,
        layers: 2,
        path: 'models/linux-250-250',
        name: "Linux Kernel",
        prefix: "/* TODO: conditionals */\n"
    },

}