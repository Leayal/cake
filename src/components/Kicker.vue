<template>
  <div class="pageContainer">
    <!-- KICKER GRID HERE-->
    <div id="kickerContainer">
      <ul class="kickerGrid">
        <li v-for="kicker of kickers" :key="kicker.id">
          <div
            class="kickerWrapper"
            v-bind:data-kicker="kicker.id"
            v-on:click.capture="selectKicker($event)"
          >
            <div class="kickerName">{{ kicker.id }}</div>
            <img class="showOnPC"
              v-bind:src="'img/character/kickerList/' + kicker.id + '.jpg'"
            />
            <img class="showOnPhone"
              v-bind:src="'img/character/kickerListSmall/' + kicker.id + '.jpg'"
            />
            <div class="kickerBG"></div>
          </div>
        </li>
      </ul>
    </div>
    <!-- KICKER INFO HERE-->
    <div id="kickerInfoHolder" class="kickerInfoHolder">
      <div class="kickerInfoWrapper" id="kickerInfoWrapper">
        <div
          class="kickerInfo"
          v-for="kicker of kickers"
          :key="kicker.id"
          v-bind:data-kickerinfo="kicker.id"
        >
          <div class="kickerInfoImage">
            <img v-bind:src="'img/character/kickers/' + kicker.id + '.jpg'" />
          </div>
          <div class="kickerInfoText">
            <div class="kickerInfoName">{{ kicker.name }}</div>
            <div class="kickerInfoSkill">
              <ul>
                <li v-for="skill of kicker.skills" :key="skill.id">
                  <div class="skillName" v-bind:class="skill.id">
                    {{ skill.skillName }}
                  </div>
                  <div class="skillDescription">{{ skill.description }}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="kickerInfoClose" v-on:click.capture="closeKickerInfo()">
        <div class="closebutton">
          <div id="mdiv">
            <div class="mdiv">
              <div class="md"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="kickerInfoHolderBG"></div>
    </div>
  </div>
</template>

<style lang="scss">
ul,
li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.closebutton {
  #mdiv {
    width: 50px;
    height: 50px;
    background-color: red;
    border: 2px solid black;
  }

  .mdiv {
    height: 50px;
    width: 3px;
    margin-left: 24px;
    background-color: black;
    transform: rotate(45deg);
    z-index: 1;
  }

  .md {
    height: 50px;
    width: 3px;
    background-color: black;
    transform: rotate(90deg);
    z-index: 2;
  }
}
.kickerInfoHolder {
  display: none;
  width: 90%;
  &.active {
    display: block;
    position: absolute;
    top: 85px;
    left: 5%;
    z-index: 2;
    border: 2px solid black;
  }
  .kickerInfoClose {
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 3;
  }
  .kickerInfoHolderBG {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.8;
  }

  .kickerInfo {
    display: none;
    &.active {
      display: flex;
      flex-direction: row;
    }

    .kickerInfoImage {
      max-width: 500px;
      max-height: 500px;
      overflow: hidden;
      background-color: #ffdc00;
      flex: 1;
      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
    .kickerInfoText {
      color: rgb(245, 245, 245);
      flex: 1;
      .kickerInfoName {
        padding-top: 10px;
        padding-bottom: 15px;
        font-size: 20px;
      }
      .kickerInfoSkill {
        .skillName {
          padding-top: 5px;
          padding-bottom: 5px;
          background-color: black;
          color: #ffdc00;
          font-weight: bold;
          &.ks::before {
            content: "Kicker Skill - ";
          }
          &.sk::before {
            content: "Special Skill - ";
          }
          &.ab::before {
            content: "Ability - ";
          }
        }
        .skillDescription {
          padding-left: 10px;
          padding-right: 10px;
          padding-top: 3px;
          padding-bottom: 6px;
        }
      }
    }
  }
}

.pageContainer {
  width: 100%;
  padding-top:20px;
  padding-bottom:20px;
  #kickerContainer {
    max-width: 1366px;
    margin: auto;
  }
}

.kickerSkill {
  display: none;
}
.kickerGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap:7px;
  .kickerWrapper {
position: relative;
    z-index: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .showOnPhone {display:none;}
    .showOnPC {
      filter:grayscale(100%);
      transition: filter 0.05s ease-in;
    }
    &:hover {
      .showOnPC {filter:grayscale(0%);}
      cursor: pointer;
    }
    img {
position: relative;
    z-index: 2;
    width: 100%;
    }
    .kickerName {
    position: relative;
    padding-top: 10px;
    padding-bottom: 10px;
    z-index: 2;
    background-color: rgb(50,50,50);
    font-family: Verdana;
    font-weight: bold;
    color: white;
    text-transform: capitalize;
    width: 100%;
    }
    .kickerBG {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background-color: #ffdc00;
    }
  }
}

/* MEDIA */
@media screen and (max-width: 769px) {
  .kickerGrid {
    grid-template-columns: repeat(3, 1fr);
    .kickerWrapper {
      .showOnPC {
        filter: grayscale(0%);

      }
    }
  }

  .kickerInfoHolder .kickerInfo {
    &.active {
      display: flex;
      flex-direction: column;
    }
    .kickerInfoImage {
      max-width: none;
      max-height: none;
    }
  }
}
@media screen and (max-width: 426px) {
  .kickerGrid {
    grid-template-columns: repeat(3, 1fr);
    .kickerWrapper {
    .showOnPhone {display:block;}
    .showOnPC {display:none;}
      }
    }
}
</style>

<script>
import axios from "axios";
export default {
  name: "kickerGrid",
  metaInfo: {
    title: "Kicker | Kick-Flight Wiki",
    meta: [
      { name: "description", content: "Fan-made Kick-Flight Wiki" },
      { name: "keywords", content: "mobile-game,kick-Flight" }
      //you can also add open graph tags here
    ]
  },
  data() {
    return {
      kickers: []
    };
  },
  async created() {
    try {
      const res = await axios.get("json/kickers.json");
      //const res = await axios.get('https://vlk1993.github.io/cake/json/kickers.json');
      this.kickers = res.data.kickers;
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    selectKicker: function(event) {
      var kickerActive = event.target.parentElement.dataset.kicker;
      var kickerInfoHolder = document.getElementById("kickerInfoHolder");
      var kickerInfoShow = document.querySelector(
        '.kickerInfo[data-kickerinfo="' + kickerActive + '"]'
      );
      kickerInfoHolder.classList.add("active");
      kickerInfoShow.classList.add("active");

      //console.log(event.target.parentElement.dataset.kicker)
    },
    closeKickerInfo: function() {
      var kickerInfoHolder = document.getElementById("kickerInfoHolder");
      var kickerInfoAll = document.querySelectorAll(
          ".kickerInfo[data-kickerinfo]"
        ),
        i;

      kickerInfoHolder.classList.remove("active");
      for (i = 0; i < kickerInfoAll.length; ++i) {
        kickerInfoAll[i].classList.remove("active");
      }
    }
  }
};
</script>
