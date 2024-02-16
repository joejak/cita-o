<script>

	import { createPhase, createProject, createScenario, createSpecifier } from "$lib/models";
	import { onMount } from "svelte";

    let tscenarios = 3; 
    let tspecifiers = 10;
    /** @type {Array<import("$lib/models").Specifier>}*/
    let specarr = []; 
    let proj = createProject();
    /** @type {Array<import("$lib/models").Scenario>}*/
    let scenarios = []; 
    /** @type {Array<import("$lib/models").Phase>}*/
    let phases = []; 
    proj.name = "Test Project"; 

    onMount(()=>{
        let exampleRoles = [
        "PM",
        "Mobile Devleoper",
        "Senior Developer",
        "PO",
        "QA Manual",
        "DevOps Engineer",
        "UI/UX Designer",
        "Creative Director",
        "Senior Technical Architect",
        "Full-stack Web Developer",
    ]

    console.log("loading specifiers...")
    while(--tspecifiers){
        let spec = createSpecifier(); 
        spec.name = `Test Specifier ${tspecifiers}`
        spec.billrate = (Math.random()*10000);
        spec.costrate = (Math.random()*10000);
        spec.role = exampleRoles[Math.floor(Math.random()*10)];
        specarr.push(spec); 
    }
    
    console.log("loading scenarios...")
    while(--tscenarios){
        console.log(tscenarios); 
        let tphases = 5; 
        let scenario = createScenario(); 
        scenario.name = `Test Scenario ${tscenarios}`
        while(--tphases){
            let phase = createPhase();
            phase.name = `Test Phase ${tphases}`
            phase.specifiers = specarr; 
            scenario.phaseIDs.push(phase.id); 
            phases.push(phase); 
        }
        proj.scenarioIDs.push(scenario.id); 
        scenarios.push(scenario); 
    }

    console.log(proj); 

    console.log(scenarios); 

    console.log(phases); 

    })
</script>

<div style="border:solid; border-color: red;">
    <p>hello world</p>
</div>

<style>

</style>

