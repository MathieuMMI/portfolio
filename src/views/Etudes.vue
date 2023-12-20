<template>
    <section class="p-8">
        <div class="container mx-auto">
            <h2 class="text-5xl font-bold mb-10">Sujets étudiés et méthodes</h2>
            <div class="mb-8">
                <p class="text-gray-700 text-left text-xl mb-14">Je vais ici vous parler des sujets que j'ai pu étudier,
                    que ce soit dans le cadre de mon cursus universitaire ou dans mon apprentissage personnel. Je précise
                    qu'une partie de ces derniers a été travaillé de mon côté, afin de renforcer mon socle de
                    connaissance.</p>
                <p class="text-gray-700 text-left text-xl">Mais avant cela, je souhaite vous présenter mes deux principaux
                    moyens de progression, en dehours des cours de ma formation ou qu'on peut retrouver sur le web.</p>
                <p class="text-gray-700 text-left text-xl mb-4">D'abord, il me semble important de vous présenter les
                    carnets de note que j'utilise régulièrement. Notamment celui sur l'IA, et celui sur la programmation et
                    les logiciels. Ces derniers sont à peu près. Le premier contient 262 pages de remplies, et le second
                    108. Ils me servent à prendre des notes sur des sujets liés à ces thèmes et à les approfondir, et à les
                    relire pour pouvoir solidifer mon socle de connaissances dessus. Je ne note pas, ou presque pas, des
                    lignes de code dessus, mais plutôt des concepts, des réflexions, ou autre. J'ai aussi un carnet pour les
                    définitions.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <figure><img src="/img/blocknot_ai.jpg" alt="Photographie de mon carnet sur l'Intelligence Artificielle"
                            class="m-auto w-[45%] -rotate-90" />
                        <figcaption class="text-center">Mon carnet sur l'intelligence artificielle</figcaption>
                    </figure>
                    <figure><img src="/img/blocknot_defs.jpg" alt="Photographie de mon carnet de définitions" class="m-auto w-[50%] rotate-90" />
                        <figcaption class="text-center">Mon carnet de définitions</figcaption>
                    </figure>
                </div>
                <p class="text-gray-700 text-left text-xl mt-4">Le second outil que j'utilise, c'est la veille. Je fais une
                    veille sur la technologie en général, une sur l'intelligence artificielle, une autre sur les logiciels
                    3D et une sur les différents langages de programmation.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <figure><img src="/img/veille_AI.png" alt="Image de ma veille sur l'Intelligence Artificielle"
                            class="m-auto" />
                        <figcaption class="text-center">Ma veille sur l'intelligence artificielle</figcaption>
                    </figure>
                    <figure><img src="/img/Veille_JV.png" alt="Image de ma veille sur le jeu vidéo" class="text-center" />
                        <figcaption class="text-center">Ma veille sur les logiciels 3D</figcaption>
                    </figure>
                </div>
                <!--Sous-partie 1-->
                <div class="mb-36">
                    <h3 class="text-3xl font-bold mb-10 text-center">La 3D</h3>

                    <!--Sous-sous-partie 1-->
                    <div class="mb-20">
                        <h4 class="text-2xl font-bold mb-2">Unreal Engine</h4>
                        <div>
                            <figure class="mb-5">
                                <img src="/img/ue5.png" alt="Logo de Unreal Engine" class="mb-4 md:mb-0 w-[15%] m-auto" />
                                <figcaption class="text-center">Logo de Unreal Engine</figcaption>
                            </figure>
                            <p class="text-gray-700 text-left text-xl">J'ai eu l'occasion de travailler le logiciel
                                Unreal Engine lors de mes heures de cours ou de mes heures de travail personnel.
                                J'y ai étudié plusieurs choses sur le logiciel : la construction des maps, le
                                fonctionnement des blueprints, la gestion des personnages (avec le rig, les animations
                                blueprints,
                                et la locomotion notamment). J'ai eu l'occasion de voir les bases des matériaux
                                également, ainsi que la gestion des événements. J'ai aussi étudié des plugins et
                                extensions d'Unreal Engine, comme Water ou MetaHuman.
                                J'ai aussi pu étudier la configuration d'Intelligences Artificielles ainsi que la mise
                                en place d'un multijoueur. Enfin, j'ai appris à gérer la création de commandes,
                                l'initialisation de la réalité virtuelle et le développement d'applications en 3D pour cet
                                outil, et la génération d'APK.
                            </p>
                            <p class="text-gray-700 text-left text-xl">Pour voir plus en détail mes apprentissages, je
                                vous renvoie aux différents projets basés sur Unreal Engine, notamment <router-link
                                    to="/Swoss" class="text-blue-500 underline">Swoss</router-link>, ou <router-link
                                    to="/UE" class="text-blue-500 underline">mon projet réalisé en SAE</router-link>.
                                Vous pouvez aussi consulter <router-link to="/VR" class="text-blue-500 underline">mon projet
                                    en VR</router-link>.</p>
                        </div>
                    </div>

                    <!--Sous-sous-partie 2-->
                    <div class="mb-20">
                        <h4 class="text-2xl font-bold mb-2">Blender</h4>
                        <div>
                            <figure class="mb-5"><img src="/img/blender.png" alt="Logo de Blender"
                                    class="mb-4 md:mb-0 w-[15%] m-auto" />
                                <figcaption class="text-center">Logo de Blender</figcaption>
                            </figure>
                            <p class="text-gray-700 text-left text-xl">Sur Blender, j'ai appris la modélisation d'objets
                                par différentes méthodes : en la construisant à partir d'images, par le mode sculpt, ou
                                autre. J'ai également appris comment gérer des personnages : leur définir un squelette,
                                des os, les animer, les exporter vers des logiciels comme Unreal Engine ou Godot.
                                Enfin, j'ai appris à gérer le texturage et la création de matériaux sur Blender.
                            </p>
                            <p class="text-gray-700 text-left text-xl">Voilà un exemple de réalisation 3D que j'ai faite sur
                                Blender.</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <img src="/img/baleine.png" alt="baleine">
                                <p class="text-gray-700 text-left text-xl">J'ai réalisé une baleine en 3D, en suivant
                                    différentes étapes (modélisations, scult..). Je n'ai pas été jusqu'à lui appliquer un
                                    squelette et des animations, mais je pense avoir plutôt bien avancé.</p>
                            </div>
                        </div>
                    </div>

                    <!--Sous-sous-partie 3-->
                    <div class="mb-20">
                        <h4 class="text-2xl font-bold mb-2">Godot</h4>
                        <figure class="mb-5"><img src="/img/godot.png" alt="Logo de Godot"
                                class="mb-4 md:mb-0 w-[15%] m-auto" />
                            <figcaption class="text-center">Logo de Godot</figcaption>
                        </figure>
                        <p class="text-gray-700 text-left text-xl mb-5">Sur Godot, j'ai principalement appris la gestion
                            de l'interface, et la manière de gérer les scripts. Je me suis pour le moment concentré
                            sur la gestion du personnage et ses différentes composantes : gestion des animations,
                            gestion des actions en tant qu'IA, etc.
                            Vous pouvez retrouver ici le projet que je mène sur le logiciel : <router-link to="/Argimes"
                                class="text-blue-500 underline">Argimes</router-link> ; ou alors
                            retrouver ci-dessous les exerices réalisés avec le logiciel à l'aide de la
                            documentation.</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <figure><img src="/img/godot_2d.png" alt="Image de l'exercice réalisé pour un jeu Godot en 2D"
                                    class="m-auto">
                                <figcaption class="text-center"></figcaption>
                            </figure>
                            <figure><img src="/img/godot_3d.png" alt="Image de l'exercice réalisé pour un jeu Godot en 3D"
                                    class="m-auto">
                                <figcaption class="text-center"></figcaption>
                            </figure>
                        </div>
                    </div>

                    <!--Sous-sous-partie 4-->
                    <div class="mb-20">
                        <h4 class="text-2xl font-bold mb-2">3D Max</h4>
                        <figure class="mb-5"><img src="/img/3dmax.png" alt="Logo de 3DMax"
                                class="mb-4 md:mb-0 w-[15%] m-auto" />
                            <figcaption class="text-center">Logo de 3DMax</figcaption>
                        </figure>
                        <p class="text-gray-700 text-left text-xl">J'ai pu acquérir quelques bases en 3d max lors de
                            mes cours de seconde année, avec la création d'un livre, que vous pouvez retrouver
                            ci-contre.</p>
                        <p class="text-gray-700 text-left text-xl  mb-5">Vous pouvez retrouver ci-dessous un screenshot de
                            l'exercice réalisé sur 3d max.</p>
                        <figure><img src="/img/livre.png" alt="Photographie d'un livre réalisé sur 3dMax"
                                class="rounded-md mb-4 md:mb-0 m-auto w-[25%]" />
                            <figcaption class="text-center">Livre que j'ai réalisé sur 3dMax</figcaption>
                        </figure>
                    </div>
                </div>
            </div>

            <!--Sous-partie 2-->
            <div class="mb-8">
                <h3 class="text-3xl font-bold mb-2 text-center">Le web</h3>

                <!--Sous-sous-partie 1-->
                <div class="mb-20">
                    <h4 class="text-2xl font-bold mb-2">Technologies front</h4>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <figure><img src="/img/vue.png" alt="Logo de VueJS"
                                class="rounded-md mb-4 md:mb-0 w-[25%] m-auto" />
                            <figcaption class="text-center">Logo de VueJS</figcaption>
                        </figure>
                        <figure><img src="/img/nuxt.png" alt="Logo de NuxtJS"
                                class="rounded-md mb-4 md:mb-0 w-[25%] m-auto" />
                            <figcaption class="text-center">Logo de NuxtJS</figcaption>
                        </figure>
                        <figure><img src="/img/css.png" alt="Logo CSS" class="rounded-md mb-4 md:mb-0 w-[15%] m-auto" />
                            <figcaption class="text-center">Logo CSS</figcaption>
                        </figure>
                    </div>
                    <p class="text-gray-700 text-left text-xl">Grâce à ma formation, j'ai acquis une solide
                        expertise
                        dans le développement web. D'abord, j'y ai appris à utiliser le HTML et le CSS. J'ai été
                        initié à la conception de sites sous WordPress, élargissant ainsi mes compétences en
                        matière de création de contenus en ligne. J'ai appris à manier les thèmes et plugins
                        qu'utilise
                        ce CMS.Mon parcours de formation m'a également permis de comprendre le JavaScript, et son usage
                        dans les interactions sur un site web.
                        J'y ai également vu des frameworks JS, notamment VueJS et sa surcouche Nuxt, ce qui
                        m'a permis de développer des applications web plus avancées et réactives. En parallèle, j'ai
                        appris à exploiter des frameworks CSS tels que Tailwind et Bootstrap, perfectionnant ainsi
                        mon savoir-faire en matière de stylisation et d'optimisation des interfaces utilisateur.
                    </p>

                </div>

                <!--Sous-sous-partie 2-->
                <div class="mb-20">
                    <h4 class="text-2xl font-bold mb-2">Technologies back</h4>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <figure><img src="/img/firebase.png" alt="Logo de Firebase"
                                class="rounded-md mb-4 md:mb-0 w-[20%] m-auto" />
                            <figcaption class="text-center">Logo de Firebase</figcaption>
                        </figure>
                        <figure><img src="/img/supabase.png" alt="Logo de Supabase"
                                class="rounded-md mb-4 md:mb-0 w-[25%] m-auto" />
                            <figcaption class="text-center">Logo de Supabase</figcaption>
                        </figure>
                        <figure><img src="/img/prismic.png" alt="Logo Prismic"
                                class="rounded-md mb-4 md:mb-0 w-[25%] m-auto" />
                            <figcaption class="text-center">Logo de Prismic</figcaption>
                        </figure>
                    </div>
                    <p class="text-gray-700 text-left text-xl">Ma formation ne s'est pas limitée à l'usage de
                        technologies front. J'ai pu acquérir des connaissances par l'usage de technologies de backend,
                        avec Firebase, la
                        plateforme de développement mobile et web de Google, en apprenant à manipuler ses bases de
                        données en temps réel. De plus, j'ai pu
                        étudier Supabase, son alternative open source. Enfin, j'ai étudié Prismic, un système de gestion
                        de contenu headless, pour optimiser la gestion
                        et la livraison de contenus. Par ailleurs, j'ai acquis des bases dans la création et la gestion
                        d'API en travaillant avec PostgreSQL et en utilisant l'outil Insomnia pour le test de l'API.
                    </p>
                </div>

                <!--Sous-sous-partie 3-->
                <div class="mb-20">
                    <h4 class="text-2xl font-bold mb-2">Visualisation de données</h4>
                    <figure><img src="/img/chartjs.png" alt="Logo de ChartJS"
                            class="rounded-md mb-4 md:mb-0 w-[15%] m-auto" />
                        <figcaption class="text-center">Logo de ChartJS</figcaption>
                    </figure>
                    <p class="text-gray-700 text-left text-xl">Ma formation m'a aussi permis d'étudier la
                        visualisation de données, avec la bibliothèque Javascript ChartJS. Cette dernière est un
                        outil puissant pour créer des graphiques interactifs et dynamiques. Nous avons notamment
                        utilisé des données d'API publiques, mettant en pratique les concepts clés liés à la
                        collecte et à l'intégration de données provenant de sources externes. Cette expérience m'a
                        également permis de travailler l'explication de données visuelles.</p>
                    <p class="text-gray-700 text-left text-xl">Vous pouvez retrouver ici <router-link to="/ChartJS"
                            class="text-blue-500 underline">mon projet réalisé avec ChartJS</router-link>.</p>
                </div>
            </div>


            <!--Sous-partie 3-->
            <div class="mb-36">
                <h3 class="text-3xl font-bold mb-2 text-center">La programmation</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-5">
                    <figure><img src="/img/python.png" alt="Logo de Python"
                            class="rounded-md mb-4 md:mb-0 w-[25%] m-auto" />
                        <figcaption class="text-center">Logo de Python</figcaption>
                    </figure>
                    <figure><img src="/img/java.png" alt="Logo de Java" class="rounded-md mb-4 md:mb-0 w-[20%] m-auto" />
                        <figcaption class="text-center">Logo de Java</figcaption>
                    </figure>
                    <figure><img src="/img/c++.png" alt="Logo du C++" class="rounded-md mb-4 md:mb-0 w-[25%] m-auto" />
                        <figcaption class="text-center">Logo du C++</figcaption>
                    </figure>
                </div>
                <p class="text-gray-700 text-left text-xl">J'ai consacré du temps à étudier de manière autonome des
                    langages de programmation tels que Python, Java ou C++. Ceci afin de consolider et d'approfondir
                    mes compétences en programmation. Cette démarche personnelle m'a permis d'explorer différentes
                    approches de programmation, renforçant significativement ma compréhension des concepts
                    fondamentaux en programmation orientée objet. De plus, travailler sur des langages haut niveau
                    et d'autres langages plus bas niveau m'a permis de comprendre les différences qu'on peut
                    retrouver entre ces langages.</p>
            </div>

            <!--Sous-partie 4-->
            <div class="mb-8">
                <h3 class="text-3xl font-bold mb-2 text-center">L'intelligence artificielle</h3>
                <p class="text-gray-700 text-left text-xl mb-8">Afin d'élargir mes horizons, je me suis intéressé à
                    l'Intelligence Artificielle. Pour mon apprentissage, j'ai suivi divers cours (via des vidéos) de
                    <a href="https://www.coursera.org/instructor/andrewng" class="text-blue-700 underline">Andrew Ng
                        sur Coursera</a>. J'ai trouvé que ces cours m'ont plutôt bien introduit à l'IA et plus
                    précisément à l'apprentissage automatique / Machine
                    learning. J'ai pu étudier divers types d'algorithmes, divers concepts, apprendre les corps de
                    métier liés à l'IA, comprendre l'importance des données dans l'apprentissage de l'IA, apprendre
                    les divers moyens de créer ce lot de données, etc..
                </p>
                <p class="text-gray-700 text-left text-xl mb-8">Plutôt curieux à propos de l'apprentissage par
                    renforcement,
                    j'ai poursuivi mes recherches sur ce sujet. Ma curiosité a été liée au lien que cette forme
                    d'apprentissage a avec le jeu vidéo. Les agents intelligents utilisent des stratégies
                    d'apprentissage
                    par renforcement pour prendre des décisions en temps réel. Les agents intelligents utilisent des
                    stratégies pour prendre des décisions en temps réel, par exemple avec le dilemme
                    exploitation-exploration. J'ai souhaité comprendre les mécanismes et concepts liés à cet
                    apprentissage
                    spécifique.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <p class="text-gray-700 text-left text-xl mb-8">Vous pouvez retrouver ci-contre une de mes
                        tentatives de
                        développer une IA qui se base sur l'apprentissage par renforcement. J'ai avant tout mis en
                        place
                        un environnement pour le jeu.</p>
                    <pre class="mb-8 bg-gray-900 text-white p-4 rounded-md max-h-36 overflow-y-auto"><code>
class MazeEnvironment:
    def __init__(self):
        self.width = 5
        self.height = 5
        self.player_x = 0
        self.player_y = 0
        self.goal_x = 4
        self.goal_y = 4
        self.enemy_x = 2
        self.enemy_y = 2
        self.time_left = 30  # Vous pouvez initialiser le temps restant ici

        # Espaces d'observation
        self.observation_space = {
            "player_x": (0, self.width - 1),
            "player_y": (0, self.height - 1),
            "goal_x": (0, self.width - 1),
            "goal_y": (0, self.height - 1),
            "enemy_x": (0, self.width - 1),
            "enemy_y": (0, self.height - 1),
            "time_left": (0, self.time_left)
        }

    def reset(self):
        self.player_x = 0
        self.player_y = 0
        self.time_left = 30
        return self.get_observation()


    def step(self, action):
        if action == 'left':
            if self.player_x > 0:
                self.player_x -= 1
        elif action == 'right':
            if self.player_x &lt self.width - 1:
                self.player_x += 1
        elif action == 'up':
            if self.player_y > 0:
                self.player_y -= 1
        elif action == 'down':
            if self.player_y &lt self.height - 1:
                self.player_y += 1

        if self.time_left > 0:  # Vérifiez si time_left est positif avant de le réduire
            self.time_left -= 1

        # Calculer la récompense
        if self.player_x == self.goal_x and self.player_y == self.goal_y:
            reward = 1.0
            done = True
        else:
            reward = 0.0
            done = False

        return (self.player_x, self.player_y), reward, done
    
    def get_observation(self):
        return {
            "player_x": self.player_x,
            "player_y": self.player_y,
            "goal_x": self.goal_x,
            "goal_y": self.goal_y,
            "enemy_x": self.enemy_x,
            "enemy_y": self.enemy_y,
            "time_left": self.time_left
        }
                        </code></pre>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <p class="text-gray-700 text-left text-xl mb-8">Puis, j'ai tenté de mettre en place le code pour
                        que
                        l'IA agisse et apprenne.</p>
                    <pre class="mb-8 bg-gray-900 text-white p-4 rounded-md max-h-36 overflow-y-auto"><code>
import numpy as np
import gym
import random
from envExemple import MazeEnvironment

env = MazeEnvironment()

q_table = {}

for player_x in range(env.width):
    for player_y in range(env.height):
        for goal_x in range(env.width):
            for goal_y in range(env.height):
                for enemy_x in range(env.width):
                    for enemy_y in range(env.height):
                        for time_left in range(env.time_left + 1):
                            state = (player_x, player_y, goal_x, goal_y, enemy_x, enemy_y, time_left)
                            q_table[state] = {action: 0.0 for action in ["left", "right", "up", "down"]}

epsilon = 1.0  # Epsilon initial
epsilon_min = 0.1  # Epsilon minimum
epsilon_decay = 0.995  # Facteur de décroissance

def choose_action(q_table, state):
    global epsilon
    if random.uniform(0, 1) &lt epsilon:
        # Exploration : choisir une action au hasard
        return random.choice(["left", "right", "up", "down"])
    else:
        # Exploitation : choisir l'action avec la valeur Q maximale
        return max(q_table[state], key=q_table[state].get)

# À chaque étape de la boucle d'entraînement, vous pouvez réduire epsilon
epsilon = max(epsilon * epsilon_decay, epsilon_min)

def convert_observation_to_state(observation):
    return (
        observation["player_x"],
        observation["player_y"],
        observation["goal_x"],
        observation["goal_y"],
        observation["enemy_x"],
        observation["enemy_y"],
        observation["time_left"]
    )
    
# Obtenez l'observation actuelle de l'environnement
observation = env.get_observation()
state = convert_observation_to_state(observation)

# Définition de l'action
action = choose_action(q_table, state)

# Après avoir effectué l'action et obtenu le nouvel état
next_state, reward, done = env.step(action)

# Vérifiez si next_state existe dans la Q-table
if next_state not in q_table:
    q_table[next_state] = {action: 0.0 for action in ["left", "right", "up", "down"]}

# Mettez à jour de la Q-table
alpha = 0.1  # Taux d'apprentissage
gamma = 0.99  # Facteur de réduction

current_q = q_table[state][action]

# Assurez-vous que time_left reste positif
if state[-1] &lt= 0:
    state = state[:-1] + (1,)  # Réinitialisez time_left à 1

max_next_q = max(q_table[next_state].values())
new_q = current_q + alpha * (reward + gamma * max_next_q - current_q)
q_table[state][action] = new_q

# Mettez à jour l'état actuel
state = next_state

while not done:
    # Convertir l'observation en état
    state = convert_observation_to_state(observation)
    
    # Choisissez l'action à partir de la Q-table
    action = choose_action(q_table, state)
    
    # Effectuer l'action dans l'environnement
    next_state, reward, done = env.step(action)
    
    # Mettez à jour l'observation pour le prochain pas
    observation = env.get_observation()


num_episodes = 100
total_rewards = []
total_steps = []

for _ in range(num_episodes):
    observation = env.get_observation()
    state = convert_observation_to_state(observation)
    done = False
    episode_reward = 0
    episode_steps = 0

    while not done:
        # Définition de l'action
        action = choose_action(q_table, state)
        
        # Effectuez l'action dans l'environnement
        next_state, reward, done = env.step(action)
        episode_reward += reward
        episode_steps += 1

        # Mise à jour de l'état actuel avec le nouvel état
        state = convert_observation_to_state(env.get_observation())

    total_rewards.append(episode_reward)
    total_steps.append(episode_steps)

# Calculer les statistiques
average_reward = sum(total_rewards) / len(total_rewards)
average_steps = sum(total_steps) / len(total_steps)

print("Moyenne des récompenses sur", num_episodes, "parties :", average_reward)
print("Moyenne des pas pour atteindre l'objectif sur", num_episodes, "parties :", average_steps)
                        </code></pre>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p class="text-gray-700 text-left text-xl mb-8">Puis, j'ai défini le code de lancement de la
                            partie.
                            Si
                            celle-ci se lance bien et que l'IA agit, il y a tout de même des erreurs que je dois
                            corriger.
                            Ayant manqué de temps, je n'ai pas eu le temps de
                            les corriger, ce que je dois faire prochainement.</p>
                        <a href="#" @click="downloadCode" class="underline text-lg">Télécharger les trois fichiers
                            de
                            code</a>
                    </div>
                    <pre class="mb-8 bg-gray-900 text-white p-4 rounded-md max-h-36 overflow-y-auto"><code>
import pygame
from pygame.locals import *
import numpy as np
from AI import q_table, choose_action, convert_observation_to_state, episode_reward  # Importez vos fonctions d'IA

# Initialisation de Pygame
pygame.init()

# Dimensions des cases
case_width = 50
case_height = 50

# Nombre de cases en largeur et en hauteur
nb_cases_width = 14
nb_cases_height = 10

# Calcul de la taille du terrain
terrain_width = nb_cases_width * case_width
terrain_height = nb_cases_height * case_height

# Création de la fenêtre
size = (terrain_width, terrain_height)
screen = pygame.display.set_mode(size)

# Initialisation de la variable time_left
time_left = 30  # Vous pouvez initialiser le temps restant ici

# Titre de la fenêtre
pygame.display.set_caption("Ma fenêtre Pygame")

# Couleurs
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
GREEN = (0, 255, 0)
RED = (255, 0, 0)
BLUE = (0, 0, 255)
YELLOW = (255, 255, 0)

# Création du terrain
terrain = []
for i in range(nb_cases_height):
    ligne = []
    for j in range(nb_cases_width):
        rect = pygame.Rect(j * case_width, i * case_height, case_width, case_height)
        ligne.append(rect)
    terrain.append(ligne)

# ajout du joueur
joueur = pygame.Rect(0, 0, case_width, case_height)
joueur.x = terrain[0][0].x
joueur.y = terrain[0][0].y

# ajout de l'ennemi
ennemi = pygame.Rect(0, 0, case_width, case_height)
ennemi.x = terrain[nb_cases_height-1][nb_cases_width-1].x
ennemi.y = terrain[nb_cases_height-1][nb_cases_width-1].y

# ajout de l'objectif
objectif = pygame.Rect(0, 0, case_width, case_height)
objectif.x = terrain[9][10].x
objectif.y = terrain[7][0].y

# Initialisation du tour actuel
is_AI_turn = True

# Boucle principale
done = False
game_over = False
win = False
start_time = pygame.time.get_ticks()

# Métriques d'évaluation
num_episodes = 100
total_wins = 0
total_steps_to_win = []
total_rewards = []  # Ajoutez cette ligne pour initialiser la liste

while not done:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            done = True

    # Récupérer l'état actuel du jeu
    observation = {
        "player_x": joueur.x,
        "player_y": joueur.y,
        "goal_x": objectif.x,
        "goal_y": objectif.y,
        "enemy_x": ennemi.x,
        "enemy_y": ennemi.y,
        "time_left": time_left
    }
    state = convert_observation_to_state(observation)

    # Si c'est le tour de l'IA
    if is_AI_turn:
        # L'IA choisit une action
        action = choose_action(q_table, state)

        # Effectuer l'action
        if action == 'left' and joueur.x > 0:
            joueur.x -= case_width
        elif action == 'right' and joueur.x &lt terrain_width - case_width:
            joueur.x += case_width
        elif action == 'up' and joueur.y > 0:
            joueur.y -= case_height
        elif action == 'down' and joueur.y &lt terrain_height - case_height:
            joueur.y += case_height

        # Vérification si le joueur a atteint l'objectif
        if objectif.colliderect(joueur):
            win = True

        # Vérification si le joueur a perdu
        if ennemi.colliderect(joueur):
            game_over = True

        # Passer au tour de l'ennemi
        is_AI_turn = False

    else:
        # Ici, vous pouvez ajouter la logique de déplacement de l'ennemi
        # Par exemple, déplacez l'ennemi vers le joueur ou utilisez une stratégie spécifique
        # Pour cet exemple, l'ennemi se déplace vers le joueur en fonction de la position actuelle
        if ennemi.x > joueur.x:
            ennemi.x -= case_width
        elif ennemi.x &lt joueur.x:
            ennemi.x += case_width
        elif ennemi.y > joueur.y:
            ennemi.y -= case_height
        elif ennemi.y &lt joueur.y:
            ennemi.y += case_height

        # Vérification si le joueur a perdu (l'ennemi touche le joueur)
        if ennemi.colliderect(joueur):
            game_over = True

        # Passer au tour de l'IA
        is_AI_turn = True

    # Vérification si le joueur a gagné ou perdu
    if win:
        total_wins += 1
        total_steps_to_win.append(episode_steps)  # Ajoutez cette ligne

    elif game_over:
        done = True

    # Ajoutez la récompense à la liste
    total_rewards.append(episode_reward)

    # Effacer l'écran
    screen.fill(BLACK)

    # Affichage du terrain
    for i in range(nb_cases_height):
        for j in range(nb_cases_width):
            pygame.draw.rect(screen, GREEN, terrain[i][j], 1)

    # Affichage de l'objectif
    pygame.draw.rect(screen, YELLOW, objectif)

    # Affichage du joueur
    pygame.draw.rect(screen, RED, joueur)

    # Affichage de l'ennemi
    pygame.draw.rect(screen, BLUE, ennemi)

    # Affichage du temps restant
    font = pygame.font.Font(None, 36)
    text = font.render(f"Time left: {time_left}", True, WHITE)
    text_rect = text.get_rect(center=(size[0]//2, size[1] - 25))
    screen.blit(text, text_rect)

    # Mise à jour de l'affichage
    pygame.display.flip()

    # Vérification si le temps est écoulé
    elapsed_time = pygame.time.get_ticks() - start_time
    time_left = 30 - elapsed_time // 1000
    if time_left &lt= 0:
        done = True

# Affichage du message de fin de jeu
if game_over:
    font = pygame.font.Font(None, 36)
    text = font.render("Game Over", True, WHITE)
    text_rect = text.get_rect(center=(size[0]//2, size[1]//2))
    screen.blit(text, text_rect)
elif win:
    font = pygame.font.Font(None, 36)
    text = font.render("You Win!", True, WHITE)
    text_rect = text.get_rect(center=(size[0]//2, size[1]//2))
    screen.blit(text, text_rect)

# Mise à jour de l'affichage
pygame.display.flip()

# Attente de 2 secondes avant de fermer Pygame
pygame.time.wait(2000)

# Fermeture de Pygame
pygame.quit()

# Évaluation de la performance de l'IA
print("Nombre total de parties gagnées :", total_wins)
average_steps_to_win = sum(total_steps_to_win) / len(total_steps_to_win)
print("Moyenne des pas pour atteindre l'objectif sur", num_episodes, "parties gagnées :", average_steps_to_win)
average_reward = sum(total_rewards) / len(total_rewards)
print("Moyenne des récompenses sur", num_episodes, "parties :", average_reward)
                        </code></pre>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const code = `
// environnement
class MazeEnvironment:
    def __init__(self):
        self.width = 5
        self.height = 5
        self.player_x = 0
        self.player_y = 0
        self.goal_x = 4
        self.goal_y = 4
        self.enemy_x = 2
        self.enemy_y = 2
        self.time_left = 30  # Vous pouvez initialiser le temps restant ici

        # Espaces d'observation
        self.observation_space = {
            "player_x": (0, self.width - 1),
            "player_y": (0, self.height - 1),
            "goal_x": (0, self.width - 1),
            "goal_y": (0, self.height - 1),
            "enemy_x": (0, self.width - 1),
            "enemy_y": (0, self.height - 1),
            "time_left": (0, self.time_left)
        }

    def reset(self):
        self.player_x = 0
        self.player_y = 0
        self.time_left = 30
        return self.get_observation()


    def step(self, action):
        if action == 'left':
            if self.player_x > 0:
                self.player_x -= 1
        elif action == 'right':
            if self.player_x < self.width - 1:
                self.player_x += 1
        elif action == 'up':
            if self.player_y > 0:
                self.player_y -= 1
        elif action == 'down':
            if self.player_y < self.height - 1:
                self.player_y += 1

        if self.time_left > 0:  # Vérifiez si time_left est positif avant de le réduire
            self.time_left -= 1

        # Calculer la récompense
        if self.player_x == self.goal_x and self.player_y == self.goal_y:
            reward = 1.0
            done = True
        else:
            reward = 0.0
            done = False

        return (self.player_x, self.player_y), reward, done
    
    def get_observation(self):
        return {
            "player_x": self.player_x,
            "player_y": self.player_y,
            "goal_x": self.goal_x,
            "goal_y": self.goal_y,
            "enemy_x": self.enemy_x,
            "enemy_y": self.enemy_y,
            "time_left": self.time_left
        }

// IA
import numpy as np
import gym
import random
from envExemple import MazeEnvironment

env = MazeEnvironment()

q_table = {}

for player_x in range(env.width):
    for player_y in range(env.height):
        for goal_x in range(env.width):
            for goal_y in range(env.height):
                for enemy_x in range(env.width):
                    for enemy_y in range(env.height):
                        for time_left in range(env.time_left + 1):
                            state = (player_x, player_y, goal_x, goal_y, enemy_x, enemy_y, time_left)
                            q_table[state] = {action: 0.0 for action in ["left", "right", "up", "down"]}

epsilon = 1.0  # Epsilon initial
epsilon_min = 0.1  # Epsilon minimum
epsilon_decay = 0.995  # Facteur de décroissance

def choose_action(q_table, state):
    global epsilon
    if random.uniform(0, 1) < epsilon:
        # Exploration : choisir une action au hasard
        return random.choice(["left", "right", "up", "down"])
    else:
        # Exploitation : choisir l'action avec la valeur Q maximale
        return max(q_table[state], key=q_table[state].get)

# À chaque étape de la boucle d'entraînement, vous pouvez réduire epsilon
epsilon = max(epsilon * epsilon_decay, epsilon_min)

def convert_observation_to_state(observation):
    return (
        observation["player_x"],
        observation["player_y"],
        observation["goal_x"],
        observation["goal_y"],
        observation["enemy_x"],
        observation["enemy_y"],
        observation["time_left"]
    )
    
# Obtenez l'observation actuelle de l'environnement
observation = env.get_observation()
state = convert_observation_to_state(observation)

# Définition de l'action
action = choose_action(q_table, state)

# Après avoir effectué l'action et obtenu le nouvel état
next_state, reward, done = env.step(action)

# Vérifiez si next_state existe dans la Q-table
if next_state not in q_table:
    q_table[next_state] = {action: 0.0 for action in ["left", "right", "up", "down"]}

# Mettez à jour de la Q-table
alpha = 0.1  # Taux d'apprentissage
gamma = 0.99  # Facteur de réduction

current_q = q_table[state][action]

# Assurez-vous que time_left reste positif
if state[-1] <= 0:
    state = state[:-1] + (1,)  # Réinitialisez time_left à 1

max_next_q = max(q_table[next_state].values())
new_q = current_q + alpha * (reward + gamma * max_next_q - current_q)
q_table[state][action] = new_q

# Mettez à jour l'état actuel
state = next_state

while not done:
    # Convertir l'observation en état
    state = convert_observation_to_state(observation)
    
    # Choisissez l'action à partir de la Q-table
    action = choose_action(q_table, state)
    
    # Effectuer l'action dans l'environnement
    next_state, reward, done = env.step(action)
    
    # Mettez à jour l'observation pour le prochain pas
    observation = env.get_observation()


num_episodes = 100
total_rewards = []
total_steps = []

for _ in range(num_episodes):
    observation = env.get_observation()
    state = convert_observation_to_state(observation)
    done = False
    episode_reward = 0
    episode_steps = 0

    while not done:
        # Définition de l'action
        action = choose_action(q_table, state)
        
        # Effectuez l'action dans l'environnement
        next_state, reward, done = env.step(action)
        episode_reward += reward
        episode_steps += 1

        # Mise à jour de l'état actuel avec le nouvel état
        state = convert_observation_to_state(env.get_observation())

    total_rewards.append(episode_reward)
    total_steps.append(episode_steps)

# Calculer les statistiques
average_reward = sum(total_rewards) / len(total_rewards)
average_steps = sum(total_steps) / len(total_steps)

print("Moyenne des récompenses sur", num_episodes, "parties :", average_reward)
print("Moyenne des pas pour atteindre l'objectif sur", num_episodes, "parties :", average_steps)

// jeu
import pygame
from pygame.locals import *
import numpy as np
from AI import q_table, choose_action, convert_observation_to_state, episode_reward  # Importez vos fonctions d'IA

# Initialisation de Pygame
pygame.init()

# Dimensions des cases
case_width = 50
case_height = 50

# Nombre de cases en largeur et en hauteur
nb_cases_width = 14
nb_cases_height = 10

# Calcul de la taille du terrain
terrain_width = nb_cases_width * case_width
terrain_height = nb_cases_height * case_height

# Création de la fenêtre
size = (terrain_width, terrain_height)
screen = pygame.display.set_mode(size)

# Initialisation de la variable time_left
time_left = 30  # Vous pouvez initialiser le temps restant ici

# Titre de la fenêtre
pygame.display.set_caption("Ma fenêtre Pygame")

# Couleurs
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
GREEN = (0, 255, 0)
RED = (255, 0, 0)
BLUE = (0, 0, 255)
YELLOW = (255, 255, 0)

# Création du terrain
terrain = []
for i in range(nb_cases_height):
    ligne = []
    for j in range(nb_cases_width):
        rect = pygame.Rect(j * case_width, i * case_height, case_width, case_height)
        ligne.append(rect)
    terrain.append(ligne)

# ajout du joueur
joueur = pygame.Rect(0, 0, case_width, case_height)
joueur.x = terrain[0][0].x
joueur.y = terrain[0][0].y

# ajout de l'ennemi
ennemi = pygame.Rect(0, 0, case_width, case_height)
ennemi.x = terrain[nb_cases_height-1][nb_cases_width-1].x
ennemi.y = terrain[nb_cases_height-1][nb_cases_width-1].y

# ajout de l'objectif
objectif = pygame.Rect(0, 0, case_width, case_height)
objectif.x = terrain[9][10].x
objectif.y = terrain[7][0].y

# Initialisation du tour actuel
is_AI_turn = True

# Boucle principale
done = False
game_over = False
win = False
start_time = pygame.time.get_ticks()

# Métriques d'évaluation
num_episodes = 100
total_wins = 0
total_steps_to_win = []
total_rewards = []  # Ajoutez cette ligne pour initialiser la liste

while not done:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            done = True

    # Récupérer l'état actuel du jeu
    observation = {
        "player_x": joueur.x,
        "player_y": joueur.y,
        "goal_x": objectif.x,
        "goal_y": objectif.y,
        "enemy_x": ennemi.x,
        "enemy_y": ennemi.y,
        "time_left": time_left
    }
    state = convert_observation_to_state(observation)

    # Si c'est le tour de l'IA
    if is_AI_turn:
        # L'IA choisit une action
        action = choose_action(q_table, state)

        # Effectuer l'action
        if action == 'left' and joueur.x > 0:
            joueur.x -= case_width
        elif action == 'right' and joueur.x < terrain_width - case_width:
            joueur.x += case_width
        elif action == 'up' and joueur.y > 0:
            joueur.y -= case_height
        elif action == 'down' and joueur.y < terrain_height - case_height:
            joueur.y += case_height

        # Vérification si le joueur a atteint l'objectif
        if objectif.colliderect(joueur):
            win = True

        # Vérification si le joueur a perdu
        if ennemi.colliderect(joueur):
            game_over = True

        # Passer au tour de l'ennemi
        is_AI_turn = False

    else:
        # Ici, vous pouvez ajouter la logique de déplacement de l'ennemi
        # Par exemple, déplacez l'ennemi vers le joueur ou utilisez une stratégie spécifique
        # Pour cet exemple, l'ennemi se déplace vers le joueur en fonction de la position actuelle
        if ennemi.x > joueur.x:
            ennemi.x -= case_width
        elif ennemi.x < joueur.x:
            ennemi.x += case_width
        elif ennemi.y > joueur.y:
            ennemi.y -= case_height
        elif ennemi.y < joueur.y:
            ennemi.y += case_height

        # Vérification si le joueur a perdu (l'ennemi touche le joueur)
        if ennemi.colliderect(joueur):
            game_over = True

        # Passer au tour de l'IA
        is_AI_turn = True

    # Vérification si le joueur a gagné ou perdu
    if win:
        total_wins += 1
        total_steps_to_win.append(episode_steps)  # Ajoutez cette ligne

    elif game_over:
        done = True

    # Ajoutez la récompense à la liste
    total_rewards.append(episode_reward)

    # Effacer l'écran
    screen.fill(BLACK)

    # Affichage du terrain
    for i in range(nb_cases_height):
        for j in range(nb_cases_width):
            pygame.draw.rect(screen, GREEN, terrain[i][j], 1)

    # Affichage de l'objectif
    pygame.draw.rect(screen, YELLOW, objectif)

    # Affichage du joueur
    pygame.draw.rect(screen, RED, joueur)

    # Affichage de l'ennemi
    pygame.draw.rect(screen, BLUE, ennemi)

    # Affichage du temps restant
    font = pygame.font.Font(None, 36)
    text = font.render(f"Time left: {time_left}", True, WHITE)
    text_rect = text.get_rect(center=(size[0]//2, size[1] - 25))
    screen.blit(text, text_rect)

    # Mise à jour de l'affichage
    pygame.display.flip()

    # Vérification si le temps est écoulé
    elapsed_time = pygame.time.get_ticks() - start_time
    time_left = 30 - elapsed_time // 1000
    if time_left <= 0:
        done = True

# Affichage du message de fin de jeu
if game_over:
    font = pygame.font.Font(None, 36)
    text = font.render("Game Over", True, WHITE)
    text_rect = text.get_rect(center=(size[0]//2, size[1]//2))
    screen.blit(text, text_rect)
elif win:
    font = pygame.font.Font(None, 36)
    text = font.render("You Win!", True, WHITE)
    text_rect = text.get_rect(center=(size[0]//2, size[1]//2))
    screen.blit(text, text_rect)

# Mise à jour de l'affichage
pygame.display.flip()

# Attente de 2 secondes avant de fermer Pygame
pygame.time.wait(2000)

# Fermeture de Pygame
pygame.quit()

# Évaluation de la performance de l'IA
print("Nombre total de parties gagnées :", total_wins)
average_steps_to_win = sum(total_steps_to_win) / len(total_steps_to_win)
print("Moyenne des pas pour atteindre l'objectif sur", num_episodes, "parties gagnées :", average_steps_to_win)
average_reward = sum(total_rewards) / len(total_rewards)
print("Moyenne des récompenses sur", num_episodes, "parties :", average_reward)
  `;

const downloadCode = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'codeIAReinforcement.py';
    link.click();
};
</script>