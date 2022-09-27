function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

/* rap pit chop*/
const audio = new Audio();
audio.src="https://drive.google.com/uc?export=download&id=1BTqedyWe9u4J47DJojzItmAV4XbY8P2K";

const audiosàwàtdee = new Audio();
audiosàwàtdee.src ="https://drive.google.com/uc?export=download&id=1sY_abemu5PTBWcbvwLMgKrQ-41KEguKA";
const audio1 = new Audio();

const audiochăn = new Audio();
audiochăn.src="https://drive.google.com/uc?export=download&id=1Quz4PC52aGcC6_OzbKA3kqjYfKy12eqq";

const audiodìchăn = new Audio();
audiodìchăn.src="https://drive.google.com/uc?export=download&id=1WL7Ky-svaTc2YCsATsnbQZFkMt8l2JQu";

const audiopŏm = new Audio();
audiopŏm.src="https://drive.google.com/uc?export=download&id=189T-99QUuRnytcDAHfRvBF0hisjUr3FX";

const audiogràpŏm = new Audio();
audiogràpŏm.src="https://drive.google.com/uc?export=download&id=1p7cGWoLEfzGDZ7KtEVOfwBiw5oBMiVcT";

const audiogoo = new Audio();
audiogoo.src="https://drive.google.com/uc?export=download&id=1sNs_dX04Vw_TEPBNduHyZwpHTDpVC78p";

const audiorao = new Audio();
audiorao.src="https://drive.google.com/uc?export=download&id=1R0at4NFx71Bl7Fx01gOwDNvEhsrMcNo4";

const audiokun = new Audio();
audiokun.src="https://drive.google.com/uc?export=download&id=1ntEGvfOw5AOf7ILmhODEdF0G3t-Zmbkm";

const audionaai = new Audio();
audionaai.src="https://drive.google.com/uc?export=download&id=1eFJg0M_Z7BA_G9WT9lqJNnd_99iQHQbi";

const audiomeung = new Audio();
audiomeung.src="https://drive.google.com/uc?export=download&id=1-z_iJPSNA0MnrABxGWVV7n7sTHIK227Y";

const audiogae = new Audio();
audiogae.src="https://drive.google.com/uc?export=download&id=1ma08gcmXsPv1UyzGlx6uQ43mAkXmSt9J";

const audioter = new Audio();
audioter.src="https://drive.google.com/uc?export=download&id=19GRI-O3mecK96TBGomV3FiaisdUXT5uQ";
