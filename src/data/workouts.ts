
export type ExerciseStep = {
  title: string
  bodyPart: string
  sets: string
  reps: string
  sections: {
    musclesWorked: {
      summary?: string        // ⟵ make optional
      details: string[]
      images: {
        frontSrc: string
        backSrc: string
        altFront?: string     // ⟵ make optional
        altBack?: string      // ⟵ make optional
      }
    }
    position: string[]
    accessory: string[]
    pulleys: string[]
    beforeYouBegin: string[]
    keyPoints: string[]
  }
  images: {
    start: { src: string; alt: string; bullets: string[] }
    finish: { src: string; alt: string; bullets: string[] }
  }
}

export type Workout = {
  slug: string
  name: string
  frequency: string
  duration: string
  description: string
  exercises: ExerciseStep[]
}

const placeholderSection = {
  summary: "Primary and assisting muscles for this movement.",
  details: [
    "Primary movers and stabilizers engaged.",
    "Maintain controlled tempo and full range of motion."
  ],
  images: {
    frontSrc: "assets/anatomy/front.png",
    backSrc: "assets/anatomy/back.png",
    altFront: "Front musculature highlighted for this exercise",
    altBack: "Back musculature highlighted for this exercise"
  }
}

const placeholderExercise = (title: string, bodyPart: string): ExerciseStep => ({
  title,
  bodyPart,
  sets: "1–2",
  reps: "10–15",
  sections: {
    musclesWorked: placeholderSection,
    position: ["Neutral spine", "Core braced", "Shoulders relaxed"],
    accessory: ["Handgrips or standard handles"],
    pulleys: ["Standard pulley position"],
    beforeYouBegin: ["Check attachments", "Set a manageable resistance"],
    keyPoints: ["Smooth tempo", "Stop if you feel pain"]
  },
  images: {
    start: { src: "assets/placeholders/start.png", alt: `${title} start position`, bullets: ["Starting alignment bullets here."] },
    finish: { src: "assets/placeholders/finish.png", alt: `${title} finish position`, bullets: ["Finishing alignment bullets here."] }
  }
})

export const workouts: Workout[] = [
  {
    slug: "20-minute-better-body",
    name: "20 Minute Better Body Workout",
    frequency: "3 Days Per Week (M‑W‑F)",
    duration: "About 20 Minutes",
    description:
      "Start with one set of each exercise. Warm up with a light resistance (5–10 easy reps), then choose a resistance that lets you complete 10–15 reps with good form. Rest 30–45 seconds between sets. Count 3 seconds up and 3 seconds down, and work to fatigue for each set.",
    exercises: [
      {
        title: "Bench Press",
        bodyPart: "Chest",
        sets: "1–2",
        reps: "10–15",
        sections: {
          musclesWorked: {
            details: [
              "Targets the chest (pectoralis major).",
              "Assists: anterior deltoid and triceps of the upper arm.",
              "Serratus anterior engaged for scapular control."
            ],
            images: {
              frontSrc: "assets/anatomy/chest-front.png",
              backSrc: "assets/anatomy/upper-arm-back.png",
              altFront: "Front view highlighting chest and anterior deltoid",
              altBack: "Back view highlighting triceps involvement"
            }
          },
          position: ["Seated, facing outward.", "Hands on handgrips at chest height.", "Neutral spine and braced core."],
          accessory: ["Handgrips"],
          pulleys: ["Center Cross Bar — wide position."],
          beforeYouBegin: [
            "Remove leg extension attachment if present.",
            "Adjust seat so grips align with mid‑chest.",
            "Retract and depress shoulder blades (pinch gently)."
          ],
          keyPoints: [
            "Maintain a ~90° angle between upper arms and torso.",
            "Keep shoulder blades lightly pinched throughout.",
            "Move smoothly; avoid locking elbows at end range."
          ]
        },
        images: {
          start: {
            src: "assets/exercises/benchpress-start.png",
            alt: "Bench press start position on Bowflex",
            bullets: [
              "Sit and grasp hand grips.",
              "Straighten arms to front.",
              "Be sure arms are directly in line with cables, palms facing down and wrists straight.",
              "Raise chest and pinch shoulder-blades together. Maintain a very slight, comfortable, arch in lower back."
            ]
          },
          finish: {
            src: "assets/exercises/benchpress-finish.png",
            alt: "Bench press finish position on Bowflex",
            bullets: [
              "Slowly move elbows out, simultaneously bending arms, keeping forearms in line with cables.",
              "Stop when upper arms are straight out to the sides, level with shoulders.",
              "Slowly press forward, oving hands toward center. Return to start position with arms straight to front at shoulder width. eep chest muscles tightened."
            ]
          }
        }
      },
      {
        title: "Bentover Row",
        bodyPart: "Back",
        sets: "1–2",
        reps: "10–15",
        sections: {
          musclesWorked: {
            details: [
              "Latissimus dorsi, teres major and rear deltoid, which make up the large pulling muscles of upper back.",
              " Also involves biceps group."
            ],
            images: {
              frontSrc: "assets/anatomy/front-biceps.png",
              backSrc: "assets/anatomy/rear-deltoid.png",
              altFront: "Front view highlighting biceps",
              altBack: "Back view highlighting Latissimus dorsi, teres major and rear deltoid"
            }
          },
          position: ["Standing - facing machine."],
          accessory: ["Handgrips"],
          pulleys: ["Squat pulley frame."],
          beforeYouBegin: [
            "Remove seat and leg extension.",
          ],
          keyPoints: [
            "Do not bend neck backward or forward while raising bar.",
            "Do not slouch when lowering hand grips.",
            "Keep spine in good alignment through entire motion."
          ]
        },
        images: {
          start: {
            src: "assets/exercises/bent-over-row-start.png",
            alt: "Bench press start position on Bowflex",
            bullets: [
              "Stand on platform. Reach down and grasp hand grips, palms facing each other.",
              "Let arms extend in direction of pulleys.",
              "Keep back flat and knees bent.",            ]
          },
          finish: {
            src: "assets/exercises/bent-over-row-finish.png",
            alt: "Bench press finish position on Bowflex",
            bullets: [
              "Move elbows back as you bring hand grips to a point below chest.",
              "Slowly reverse motion. Keep knees bent and back flat.",
            ]
          }
        }
      },
      {
        title: "Crossover Rear Deltoid Row - Elbow Flexion",
        bodyPart: "Shoulders",
        sets: "1–2",
        reps: "10–15",
        sections: {
          musclesWorked: {
            details: [
            ],
            images: {
              frontSrc: "",
              backSrc: "assets/anatomy/shoulder-back.png",
              altFront: "",
              altBack: "Rear view highlighting rear deltoids"
            }
          },
          position: ["Standing - facing machine"],
          accessory: ["Handgrips"],
          pulleys: ["Center Cross Bar — narrow position."],
          beforeYouBegin: [
            "Remove leg extension and seat.",
            "Center crossbar pulleys should be in narrow position."
          ],
          keyPoints: [
            "Maintain a ~90° angle between upper arms and sides of torso.",
            "Keep shoulder blades pinched together and maintain good spinal alignment.",
            "To work one arm at a time, place non-working hand on top of bench for additional stabilization."
          ]
        },
        images: {
          start: {
            src: "assets/exercises/crossover-rear-deltoid-start.png",
            alt: "Crossover Rear Deltiod Rows start position on Bowflex",
            bullets: [
              "Stand on platform.",
              "Cross arms infront of body and grasp hand grips (right grip in left hand and vice versa) with palms facing down and arms nearly straight.",
              "Bend over slightly from hips (not spine) and raise arms in front of body, 90° to torso.",
              "Lift chest, stand up straight with spine in good alignment and tighten trunk muscles."
            ]
          },
          finish: {
            src: "assets/exercises/crossover-rear-deltoid-finish.png",
            alt: "Bench press finish position on Bowflex",
            bullets: [
              "Allowing arms to bend as you go, move elbows outward and backward keeping a 90° angle between upper arms and sides of torso.",
              "Always point forearms in the direction of cables.",
              "Move until elbows are slightly behind shoulders, then slowly reverse motion. Keep rear shoulder muscles tightened during entire motion."
            ]
          }
        }
      },
      {
        title: "Biceps Curl - Elbow Flexion (in Supination)",
        bodyPart: "Arms",
        sets: "1–2",
        reps: "10–15",
        sections: {
          musclesWorked: {
            details: [
              "Biceps."
            ],
            images: {
              frontSrc: "assets/anatomy/front-biceps.png",
              backSrc: "",
              altFront: "Front view highlighting biceps",
              altBack: ""
            }
          },
          position: ["Standing - facing machine."],
          accessory: ["Handgrips"],
          pulleys: ["Squat pulley frame."],
          beforeYouBegin: [
            "Remove seat and leg extension.",
          ],
          keyPoints: [
            "Keep elbows at sides.",
            "Keep wrists straight.",
            "Keep trunk muscles tight and maintain a very slight arch in lower back."
          ]
        },
        images: {
          start: {
            src: "assets/exercises/biceps-curl-start.png",
            alt: "Bench press start position on Bowflex",
            bullets: [
              "Stand on platform.",
              "Bend down and grasp hand grips with palms forward.",
              "Stand with upper arms by sides. Lift chest, tighten abs and maintain a slight arch in lower back.",            ]
          },
          finish: {
            src: "assets/exercises/biceps-curl-finish.png",
            alt: "Bench press finish position on Bowflex",
            bullets: [
              "Curl hand grips forward, then up, and then in toward shoulders while keeping elbows at sides and upper arms completely still.",
              "Slowly lower to start position by performing the same arcing motion.",
            ]
          }
        }
      },
      {
        title: "Triceps Pushdown– Elbow Extension",
        bodyPart: "Arms",
        sets: "1–2",
        reps: "10–15",
        sections: {
          musclesWorked: {
            details: [
              "Biceps."
            ],
            images: {
              frontSrc: "",
              backSrc: "assets/anatomy/triceps-back.png",
              altFront: "",
              altBack: "Rear view highlighting triceps"
            }
          },
          position: ["Standing - facing machine."],
          accessory: ["Handgrips"],
          pulleys: ["Lat tower."],
          beforeYouBegin: [
            "Remove seat and leg extension.",
          ],
          keyPoints: [
            "Keep upper arms motionless.",
            "Keep wrists straight.",
            "Tighten triceps throughout exercise and control motion on the way up.",
            "Maintain good posture by keeping chest lifted and abs tight. Maintain a very slight arch in the lower back."
          ]
        },
        images: {
          start: {
            src: "assets/exercises/triceps-pushdown-start.png",
            alt: "Bench press start position on Bowflex",
            bullets: [
              "Stand on platform.",
              "Grasp hand grips at shoulder width, palms down.",
              "Bring arms down to sides, elbows straight. This is Start Position.",
              "Bend over slightly from hips, so shoulders are directly over hands. Lift chest and tighten abs to stabilize spine. Maintain a slight arch in lower back."
            ]
          },
          finish: {
            src: "assets/exercises/triceps-pushdown-finish.png",
            alt: "Bench press finish position on Bowflex",
            bullets: [
              "Keep upper arms stationary and elbows next to sides of torso. Slowly allow elbows to bend, moving hands in arcing motion away from legs and up.",
              "Stop at 90º.",
              "Think about tightening triceps. Slowly reverse arcing motion and straighten arms fully."
            ]
          }
        }
      },
      {
        title: "Leg Extension",
        bodyPart: "Legs",
        sets: "1–2",
        reps: "10–15",
        sections: {
          musclesWorked: {
            details: [
              "front of upper thigh (quadriceps muscle group)."
            ],
            images: {
              frontSrc: "assets/anatomy/upper-thigh-front.png",
              backSrc: "",
              altFront: "Rear view highlighting triceps",
              altBack: ""
            }
          },
          position: ["Seated – facing outward."],
          accessory: ['Leg Extension'],
          pulleys: ["Squat pulley frame."],
          beforeYouBegin: [
            "Adjust seat hight.",
          ],
          keyPoints: [
            "Use slow controlled motion. Do not “kick” into extension.",
            "Do not let knees rotate out during exercise. Keep kneecaps pointing up and forward.",
          ]
        },
        images: {
          start: {
            src: "assets/exercises/leg-extension-start.png",
            alt: "Bench press start position on Bowflex",
            bullets: [
              "Stand on platform.",
              "Grasp 50” Bent Lat Bar at shoulder width, palms down.",
              "Bring arms down to sides, elbows straight. This is Start Position.",
              "Bend over from hips, so shoulders are over hands. Lift chest and tighten abs to stabilize spine while maintaining a slight arch in lower back."
            ]
          },
          finish: {
            src: "assets/exercises/leg-extension-finish.png",
            alt: "Bench press finish position on Bowflex",
            bullets: [
              "Keep upper arms stationary and elbows next to sides of torso. Slowly allow elbows to bend, moving hands in arcing motion away from legs and up.",
              "Stop at 90º.",
              "Think about tightening triceps. Slowly reverse arcing motion and straighten arms fully."
            ]
          }
        }
      },
      {
        title: "Standing Low Back Extension– with Hip Extension",
        bodyPart: "Trunk",
        sets: "1–2",
        reps: "10–15",
        sections: {
          musclesWorked: {
            details: [
              "Muscles in lower back (erector spinae, deep spinal muscles), lower back muscles, gluteus maximus and hamstrings."
            ],
            images: {
              frontSrc: "",
              backSrc: "assets/anatomy/lower-back.png",
              altFront: "",
              altBack: "Rear view of lower back muscles"
            }
          },
          position: ["Standing - facing outward."],
          accessory: ["Handgrips"],
          pulleys: ["Squat pulley frame. - standard position."],
          beforeYouBegin: [
            "Remove seat and leg extension.",
          ],
          keyPoints: [
            "Keep chest lifted and a very slight arch in lower back at all times.",
            "Move from hips only, not waist. Do not increase or decrease the arch in lower back during the movement."
          ]
        },
        images: {
          start: {
            src: "assets/exercises/standing-lower-back-extension-start.png",
            alt: "Bench press start position on Bowflex",
            bullets: [
              "Stand facing out.",
              "Slide hand grips up over fore arms to elbows.",
              "Bend knees comfortably, cross arms in front of chest and pull hand grips tightly to chest.",
              "Lift chest, tighten trunk muscles and arch lower back slightly. Pinch shoulderblades together slightly.",
              "Lean forward from hips, slightly letting out tension in the cables."
            ]
          },
          finish: {
            src: "assets/exercises/standing-lower-back-extension-finish.png",
            alt: "Bench press finish position on Bowflex",
            bullets: [
              "Keep chest lifted, move entire torso up as a unit by pivoting at hips.",
              "Slowly return to start position without slouching or changing spinal alignment.",
            ]
          }
        }
      },
      {
        title: "Seated (Resisted) Abdominal Crunch– Spinal Flexion",
        bodyPart: "Abdominal",
        sets: "1–2",
        reps: "10–15",
        sections: {
          musclesWorked: {
            details: [
              "Muscles in lower back (erector spinae, deep spinal muscles), lower back muscles, gluteus maximus and hamstrings."
            ],
            images: {
              frontSrc: "assets/anatomy/abdominal-front.png",
              backSrc: "",
              altFront: "Rear view of lower back muscles",
              altBack: ""
            }
          },
          position: ["Standing - facing outward."],
          accessory: ["Abdominal Crunch Shoulder Harness"],
          pulleys: ["Abdominal bar."],
          beforeYouBegin: [
            "Remove leg extension.",
          ],
          keyPoints: [
            "Allow exhalation up and inhalation down, but don’t exaggerate it.",
            "Do not lift head/chin. Your head should follow rib motion, not lead, allowing you to maintain normal neck posture.",
            "Tighten abs throughout range of motion. Do not let abs relax until set is over.",
            "MOVING SLOWLY to eliminate momentum is critical."
          ]
        },
        images: {
          start: {
            src: "assets/exercises/seated-abdominal-crunch-start.png",
            alt: "Bench press start position on Bowflex",
            bullets: [
              "Attach the Abdominal Crunch Shoulder Harness by snapping one hook to each of the D rings. Place the harness on your shoulders letting the handles hang over your chest. Grab both handles. With high  resistance, a cross arm opposite-handle grip may be used.",
              "Lower back can start out flat or in normal arch, knees and hips bent and feet flat on floor."
            ]
          },
          finish: {
            src: "assets/exercises/seated-abdominal-crunch-finish.png",
            alt: "Bench press finish position on Bowflex",
            bullets: [
              "Tighten abs and curl only torso, slowly moving ribs toward hips. Move as far as you can without moving hips or neck. LOWER BACK SHOULD NOT LOSE CONTACT WITH BENCH when fully crunched.",
              "Slowly reverse motion returning to start position without relaxing.",
            ]
          }
        }
      },
    ]
  },
  // Add 6 more workouts as placeholders
  {
    slug: "placeholder-strength-a",
    name: "Total Body Strength A",
    frequency: "3 Days Per Week",
    duration: "30 Minutes",
    description: "A balanced routine targeting all major muscle groups.",
    exercises: [
      placeholderExercise("Chest Press", "Chest"),
      placeholderExercise("Lat Pulldown", "Back"),
      placeholderExercise("Shoulder Press", "Shoulders"),
      placeholderExercise("Squat", "Legs"),
      placeholderExercise("Crunch", "Trunk")
    ]
  },
  {
    slug: "placeholder-strength-b",
    name: "Total Body Strength B",
    frequency: "3 Days Per Week",
    duration: "30 Minutes",
    description: "Alternate total‑body day with complementary moves.",
    exercises: [
      placeholderExercise("Incline Press", "Chest"),
      placeholderExercise("Seated Row", "Back"),
      placeholderExercise("Lateral Raise", "Shoulders"),
      placeholderExercise("Lunge", "Legs"),
      placeholderExercise("Back Extension", "Trunk")
    ]
  },
  {
    slug: "upper-body-focus",
    name: "Upper Body Focus",
    frequency: "2 Days Per Week",
    duration: "25 Minutes",
    description: "Upper‑body emphasis for strength and posture.",
    exercises: [
      placeholderExercise("Pushup", "Chest"),
      placeholderExercise("Row", "Back"),
      placeholderExercise("Biceps Curl", "Arms"),
      placeholderExercise("Triceps Extension", "Arms"),
      placeholderExercise("Reverse Fly", "Shoulders")
    ]
  },
  {
    slug: "lower-body-focus",
    name: "Lower Body Focus",
    frequency: "2 Days Per Week",
    duration: "25 Minutes",
    description: "Lower‑body routine to build leg strength.",
    exercises: [
      placeholderExercise("Leg Press", "Legs"),
      placeholderExercise("Leg Curl", "Legs"),
      placeholderExercise("Calf Raise", "Legs"),
      placeholderExercise("Hip Abduction", "Legs"),
      placeholderExercise("Hip Extension", "Legs")
    ]
  },
  {
    slug: "core-conditioning",
    name: "Core Conditioning",
    frequency: "3 Days Per Week",
    duration: "20 Minutes",
    description: "Core‑focused movements for stability and control.",
    exercises: [
      placeholderExercise("Crunch", "Trunk"),
      placeholderExercise("Oblique Twist", "Trunk"),
      placeholderExercise("Plank Row", "Trunk"),
      placeholderExercise("Back Extension", "Trunk")
    ]
  },
  {
    slug: "cardio-strength-circuit",
    name: "Cardio + Strength Circuit",
    frequency: "3 Days Per Week",
    duration: "20 Minutes",
    description: "A quick circuit alternating strength moves and light cardio.",
    exercises: [
      placeholderExercise("Press", "Chest"),
      placeholderExercise("Row", "Back"),
      placeholderExercise("Curl", "Arms"),
      placeholderExercise("Squat", "Legs")
    ]
  }
]
