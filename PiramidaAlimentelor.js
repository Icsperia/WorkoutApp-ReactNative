import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View,} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function PiramidaAlimentelor() {
    return (
        <SafeAreaProvider>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.titlu}>Despre piramida alimentelor</Text>

                <View style={styles.card}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://img.gs/shcfmqtrbf/fit/https://doc.ro/uploads/photos/uploads/2021/FEBRUARIE/piramida%20alimentara.jpg',
                        }}
                    />
                </View>

                <View style={styles.card}>
                    <Text style={styles.text}>
                        Piramida alimentelor este un ghid vizual care ilustrează cantitatea recomandată de consum zilnic pentru fiecare grupă de alimente. A fost creată pentru a oferi oamenilor o înțelegere clară și simplă a principiilor unei alimentații sănătoase și echilibrate. Prin urmare, piramida alimentelor este un instrument util în promovarea unei diete sănătoase.
                        {'\n\n'}
                        Piramida alimentelor a fost introdusă de către Departamentul de Agricultură al Statelor Unite (USDA) în 1992. De-a lungul timpului, piramida a fost actualizată și modificată pentru a reflecta noile descoperiri în domeniul nutriției. Aceste modificări au avut ca scop adaptarea piramidei la nevoile și cunoștințele actuale despre nutriție.
                        {'\n\n'}
                        Evoluția piramidei alimentelor este evidentă prin schimbările pe care le-a suferit de-a lungul timpului, reflectând recomandările nutriționale în continuă schimbare. De exemplu, versiunea originală a piramidei punea un accent puternic pe consumul de cereale, însă versiunile mai recente promovează un consum echilibrat de toate grupele de alimente. Aceste schimbări evidențiază importanța unei alimentații variate și echilibrate.
                        {'\n\n'}
                        Diversitatea piramidei alimentelor este evidentă prin existența mai multor versiuni ale acesteia în funcție de cultură, regimul alimentar și obiceiurile alimentare ale diferitelor regiuni ale lumii. De exemplu, în regiunile în care consumul de orez este predominant, piramida alimentelor va reflecta acest aspect, recomandând un consum mai mare de cereale. Adaptarea piramidei la nevoile nutriționale specifice ale diferitelor populații este esențială pentru a promova o alimentație sănătoasă în întreaga lume.
                        {'\n\n'}
                        <Text style={styles.subtitlu}>Structura piramidei alimentelor</Text>
                        {'\n\n'}
                        Piramida alimentelor este un instrument util pentru a ne ghida in alegerea alimentelor potrivite pentru o alimentatie sanatoasa si echilibrata. In acest capitol, vom explora in detaliu grupurile de alimente care formeaza piramida alimentelor si vom intelege importanta fiecaruia in dieta noastra zilnica. [2, 3, 4]
                        {'\n\n'}
                        Cereale si produse pe baza de cereale: Aceasta grupa include alimente precum painea, orezul, pastele, cerealele si fulgii de cereale. Cerealele si produsele pe baza de cereale sunt surse bogate de carbohidrati, care ofera energie organismului. De asemenea, acestea contin fibre, vitamine din complexul B si minerale precum fierul si magneziul. Recomandarile sugereaza consumul de 6-8 portii de cereale si produse pe baza de cereale pe zi.
                        {'\n\n'}
                        Fructe si legume: Fructele si legumele sunt surse esentiale de vitamine, minerale si fibre. Acestea ne ofera antioxidanti, care ajuta la protejarea celulelor noastre de daunele provocate de radicalii liberi. Este recomandat sa consumam cel putin 5 portii de fructe si legume pe zi, intr-o varietate de culori, pentru a obtine toate substantele nutritive necesare.
                        {'\n\n'}
                        Proteine: Proteinele sunt esentiale pentru construirea si repararea tesuturilor, precum si pentru producerea enzimelor si hormonilor. Aceasta grupa include carne, peste, oua, leguminoase, tofu si nuci. Este important sa alegem proteine slabe, cum ar fi puiul si pestele, si sa evitam carnea procesata sau bogata in grasimi saturate. Recomandarile recomanda consumul de 2-3 portii de proteine pe zi.
                        {'\n\n'}
                        Lactate: Produsele lactate, cum ar fi laptele, iaurtul si branza, sunt surse bogate de calciu, vitamina D si proteine. Acestea ajuta la mentinerea sanatatii oaselor si a dintilor. Este recomandat sa consumam 2-3 portii de produse lactate pe zi, optand pentru variante cu un continut scazut de grasimi.
                        {'\n\n'}
                        Grasimi: Grasimile sunt necesare pentru organism, dar trebuie consumate cu moderatie. Acestea includ uleiurile vegetale, untul si margarina. Recomandarile sugereaza consumul de grasimi in cantitati mici si alegerea variantelor sanatoase, cum ar fi uleiul de masline sau avocado.
                        {'\n\n'}
                        <Text style={styles.subtitlu}>Recomandari generale pentru o alimentatie sanatoasa bazata pe piramida alimentelor</Text>
                        {'\n\n'}
                        Unul dintre principiile fundamentale ale piramidei alimentelor este proportia. Este esential sa intelegem ca piramida nu recomanda doar anumite tipuri de alimente, ci si proportia in care acestea ar trebui consumate. De exemplu, baza piramidei este formata din cereale, paine, paste fainoase, orez si cartofi, ceea ce inseamna ca acestea ar trebui sa constituie cea mai mare parte a dietei noastre. [2] Exista, totusi, critici asupra acestei idei, ce sustin ca baza piramidei ar trebui sa fie alcatuita din fructe si legume.
                        {'\n\n'}
                        Un alt aspect central al piramidei alimentelor este varietatea. Piramida incurajeaza consumul unei game largi de alimente din fiecare grup, pentru a asigura un spectru larg de vitamine, minerale si alte substante nutritive esentiale. Prin consumul diversificat de alimente, putem obtine nutrientii necesari pentru a ne mentine sanatatea si a preveni deficientele nutritionale.
                        {'\n\n'}
                        In partea superioara a piramidei se gasesc alimente care ar trebui consumate cu moderatie. Acest lucru include grasimi, uleiuri si dulciuri. Este important sa fim constienti de riscurile asociate cu un consum excesiv al acestor alimente si sa le includem in dieta in cantitati moderate.
                        {'\n\n'}
                        Desi nu este un aliment, apa este reprezentata in piramida alimentelor, subliniind importanta hidratarii corespunzatoare. Consumul adecvat de apa este crucial pentru buna functionare a organismului nostru. De asemenea, alaturi de recomandarile alimentare, piramida alimentelor promoveaza si un stil de viata activ, exercitiile fizice fiind un element esential pentru o viata sanatoasa.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        padding: 16,
        backgroundColor: '#f0f4f8',
    },
    titlu: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#2c3e50',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },
    image: {
        width: '100%',
        height: 220,
        borderRadius: 10,
        resizeMode: 'cover',
    },
    text: {
        fontSize: 16,
        color: '#2d3436',
        textAlign: 'justify',
        lineHeight: 24,
    },
    subtitlu: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
        marginTop: 20,
    },
});

export default PiramidaAlimentelor;
