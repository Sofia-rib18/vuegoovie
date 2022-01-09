<template>
  <div id="profile">
    <b-avatar size="100px">
        <template #badge><b-icon icon="plus"></b-icon></template>
    </b-avatar>
    <b-container class="bv-example-row">
        <b-row>
            <b-col>
                <p id="labelEdit">Username:</p>
                <p id="labelEdit">Nacionality:</p>
                <p id="labelEdit">Password:</p>
            </b-col>
            <b-col>
                <b-form-input id="user" type="text"></b-form-input>
                <lang-flag id='flagEdit' iso='pt'/>
                <b-form-input id="pass" type="text"></b-form-input>
            </b-col>
        </b-row>
    </b-container>
    <b-container class="bv-example-row">
        <b-row>
            <b-col>
                <b-button id="buttonEdit">EDIT ACCOUNT</b-button>
            </b-col>
            <b-col>
                <router-link to="/:profileId">
                    <b-button id="buttonCancel">CANCEL</b-button>
                </router-link>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    #buttonCancel{
        border-color: #fef8f8;
        background-color: #070707;
    }

    #buttonCancel:hover{
        background-color: #fef8f8;
        color: #070707;
    }

    #user, #pass{
        border-color: #de2221;
        background-color: #070707;
    }

    #labelEdit{
        color: #fef8f8;
    }

    #flagEdit{
        width: 50px;
        height: 50px;
    }
</style>