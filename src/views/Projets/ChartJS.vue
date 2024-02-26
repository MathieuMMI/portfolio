<template>
    <div class="container mx-auto my-8">
        <h1 class="text-4xl font-bold mb-4">Examen - Visualisation de données : API gouvernementales</h1>

        <!-- Introduction -->
        <div class="mb-8">
            <p class="ml-5 mr-5 text-gray-700 text-left text-xl"></p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
                <figure>
                    <img src="/img/chartjs.png" alt="Logo de ChartJS" class="rounded-md w-[25%] m-auto" />
                    <figcaption class="text-center">Logo de ChartJS</figcaption>
                </figure>
                <figure>
                    <img src="/img/vue.png" alt="Logo de VueJS" class="rounded-md w-[25%] m-auto" />
                    <figcaption class="text-center">Logo de VueJS</figcaption>
                </figure>
            </div>
        </div>

        <div class="mb-12">
            <h2 class="text-3xl font-bold mb-4 text-center">Sujet</h2>
            <p class="ml-5 mr-5 text-gray-700 text-left text-xl mb-5">
                Lors de l'examen, nous avions pour consigne de réaliser un site qui récupère les données des API
                gouvernementales et de faire des conclusion à partir de ces chiffres. Nous devions également chercher à
                garder une cohérence graphique à l'ensemble.
            </p>
        </div>

        <div class="mb-12">
            <h2 class="text-3xl font-bold mb-4 text-center">Choix des données</h2>
            <p class="ml-5 mr-5 text-gray-700 text-left text-xl mb-5">
                J'ai choisi de m'intéresser à la fréquentation des musées entre 2001 et 2020 pour cet exercice de
                représentation visuelle. J'ai fait le choix de la région Haut-de-France pour la majorité des graphes, hormis
                pour le line-chart où j'ai choisi de regarder le nombre d'entrées dans la France entière, ceci afin de voir
                une évolution sur plusieurs années de celui-ci. Vous pourrez d'ailleurs retrouver une explication de ce que
                l'on y voit.
                Pour le PieChart, j'ai aussi choisi de prendre l'entièreté de l'API, afin de regarder combien de fois chaque
                région est citée.
            </p>
        </div>

        <div class="mb-12">
            <h2 class="text-3xl font-bold mb-4 text-center">Géolocalisation</h2>
            <p class="ml-5 mr-5 text-gray-700 text-left text-xl">
                J'ai, sur la page d'accueil du site, réalisé une carte basée sur Maps qui géolocalise les musées stockés
                dans l'API en temps réel. On peut sélectionner un département pour voir les musées de ce dernier.
            </p>
            <figure>
                <img src="/img/chartjs_page.png"
                    alt="Screenshot de la page d'accueil du site, avec une carte interactive affichant les musées par département"
                    class="w-[40%] m-auto" />
                <figcaption class="text-center">Page d'accueil</figcaption>
            </figure>
        </div>

        <div class="mb-12">
            <h2 class="text-3xl font-bold mb-4 text-center">Graphiques</h2>
            <p class="ml-5 mr-5 text-gray-700 text-left text-xl">
                Puis, des graphiques ont été réalisés en récupérant les données des API. En voici deux exemples.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
                <figure>
                    <img src="/img/Graph.png" alt="Graphique en forme de radar sur la fréquentation des musées" class="rounded-md m-auto" />
                    <figcaption class="text-center">Graphique : Radar</figcaption>
                </figure>
                <figure>
                    <pre class="mb-8 bg-gray-900 text-white p-4 rounded-md max-h-36 overflow-y-auto"><code>onMounted(async () => {
    await getLille()
        .then(response => {
            liste.value = new Array(response);
            //console.log("liste", liste)
            //console.log("nb lignes", liste.value.length)
            loading.value = true
            let setLabels = new Set()
            let firstLine = true;
            liste.value[0].records.forEach((el) => {
                if (!firstLine) {
                    let dt = el.fields.annee.split('-')
                    setLabels.add(dt[0])
                }
                firstLine = false
            })
            chartData.labels = Array.from(setLabels)
            chartData.labels.sort()
            let cpt1 = []
            let cpt2 = []
            let cpt3 = []
            total.value = 0
            chartData.labels.forEach((an) => {
                let nb1 = 0
                let nb2 = 0
                let nb3 = 0
                liste.value[0].records.forEach((el) => {
                    let dt = el.fields.annee.split('-')
                    if (an == dt[0]) {
                        if (!isNaN(el.fields.gratuit))
                            nb1 += el.fields.gratuit

                        if (!isNaN(el.fields.payant))
                            nb2 += el.fields.payant

                        if (!isNaN(el.fields.total))
                            nb3 += el.fields.total

                    }
                })
                //console.log('voir', nb3)
                //console.log('voir2', cpt1)
                total.value += nb1 + nb2
                cpt1.push(nb1)
                cpt2.push(nb2)
                cpt3.push(nb3)
                firstLine = false
            })
            chartData.datasets[0].data = cpt1
            chartData.datasets[1].data = cpt2
            chartData.datasets[2].data = cpt3
        })
        .catch(error => console.log('erreur Ajax', error))
})
                    </code></pre>
                </figure>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
                <figure>
                    <img src="/img/InteractiveGraph.png" alt="Graphique interactif en fonction des données du tableau" class="rounded-md m-auto" />
                    <figcaption class="text-center">Graphique interactif en fonction des données du tableau</figcaption>
                </figure>
                <figure>
                    <pre class="mb-8 bg-gray-900 text-white p-4 rounded-md max-h-36 overflow-y-auto"><code>import { reactive, ref, onMounted } from 'vue';
import { getMus } from '@/composables/serviceAjax.js'
import { getLabels, countDatas } from '@/composables/utilsApp.js'
import { densite, aleatoire } from '@/composables/commonChart.js'
import TableMdl from '@/components/TableMdl.vue'
import { linearData, sortCol, filterColumn } from '@/composables/utilsTable.js'
import { PolarArea } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, RadialLinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale)
let propChart = defineProps({
    chartId: { type: String, default: 'polar-chart' },
    datasetIdKey: { type: String, default: 'label' },
    width: { type: Number, default: 500 },
    height: { type: Number, default: 500 },
    cssClasses: { type: String, default: '' },
    styles: { type: Object, default: () => { } },
    plugins: { type: Object, default: () => { } },
})

let chartData = reactive({
    labels: [],
    datasets: [{}]
})

const chartOptions = reactive({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        title: {
            text: null,
            display: true
        }
    }
})
let dataSelected = ref()
let fields = ref()
let items = ref()
let itemsSvg = ref()
let title = ref()
let color = ref()
let baseColor = ref()
let modeSelected = ref()
let titleGraph = ref('')
let dataView = ref('')
let numDataset = 0
let fieldsM = ref()

fieldsM.value = [
    { key: 'fields.nom_du_musee', label: "Nom du musée", type: "string", sortable: true, sort: 1, filter: "" },
    { key: 'fields.regions', label: "Région", type: "string", sortable: true, sort: 1, filter: "" },
    { key: 'fields.ville', label: "Ville", type: "string", sortable: true, sort: 1, filter: "" },
    { key: 'fields.nomdep', label: "Département", type: "string", sortable: true, sort: 1, filter: "" },
    //{ key: 'fields.note', label: "Notes", type: "string", sortable: true, sort: 1, filter: "" },
    { key: 'fields.gratuit', label: "Entrées gratuites", type: "number", sortable: true, sort: 1, filter: "" },
    { key: 'fields.payant', label: "Entrées payantes", type: "number", sortable: true, sort: 1, filter: "" },
    { key: 'fields.total', label: "Total des entrées", type: "number", sortable: true, sort: 1, filter: "" },
    { key: 'fields.annee', label: "Année", type: "number", sortable: true, sort: 1, filter: "" },
    //{ key: 'fields.ref_musee', label: "Référence du musée", type: "string", sortable: true, sort: 1, filter: "" },
    //{ key: 'fields.id_museofile', label: "Id du fichier du musée", type: "string", sortable: true, sort: 1, filter: "" },
    //{ key: 'fields.date_appellation', label: "Date de l'appelation ", type: "string", sortable: true, sort: 1, filter: "" },
    //{ key: 'fields.observations', label: "Observations", type: "string", sortable: true, sort: 1, filter: "" }
]

const selectMode = () => {
    let bgColor = null
    let bdColor = null

    if (modeSelected.value) {
        [bgColor, bdColor] = aleatoire(chartData.labels)
    } else {
        [bgColor, bdColor] = densite(baseColor.value, chartData.datasets[0].data)
    }
    chartData.datasets[0].backgroundColor = bgColor
    chartData.datasets[0].borderColor = bdColor
    chartData.datasets[0].borderWidth = 1
}

const selectData = async (typeData) => {
    dataSelected.value = typeData
    switch (typeData) {
        case 'Mus':
            await getMus()
                .then(response => {
                    items.value = response.records
                    items.value.forEach((item) => {
                        console.log('item', item)
                        console.log('itemgr', item.fields.gratuit)
                        if (item.fields.gratuit === undefined) item.fields.gratuit = ""
                        if (item.fields.payant === undefined) item.fields.payant = ""
                        if (item.fields.total === undefined) item.fields.total = ""
                    })
                    console.log('1', items.value)
                    titleGraph.value = "Superbe tableau de la fréquentation des musées"
                    dataView.value = "fields.regions#1"
                    baseColor.value = 'rgba(0,0,255,#deg#)'
                    numDataset = 0
                    fields.value = fieldsM.value
                    color.value = "color:;"
                })
            break
    }
    items.value = linearData(fields.value, items.value)
    itemsSvg.value = items.value
    updateGraph(items)
}
onMounted(async () => {
    await selectData('Mus')
})

const updateGraph = (items) => {
    chartOptions.plugins.title.text = titleGraph
    chartData.labels = getLabels(items.value, dataView.value)
    chartData.datasets[numDataset].data = countDatas(items.value, chartData.labels, dataView.value)

    selectMode()
    title.value = chartOptions.plugins.title.text
}

const tableFilter = (fields) => {
    items.value = filterColumn(fields, itemsSvg.value)
    updateGraph(items)
}
                    </code></pre>
                </figure>
            </div>
        </div>

        <!-- Conclusion -->
        <p class="ml-5 mr-5 text-gray-700 text-left text-xl">
            La SAE a été l'occasion pour moi de mettre à l'épreuve ma gestion des données via les API et leur affichage par des solutions de représentation visuelle telles que ChartJS. Elle a été également l'occasion pour moi d'interpréter ces données et de les résumer dans des graphiques divers et variés.
        </p>
    </div>
</template>