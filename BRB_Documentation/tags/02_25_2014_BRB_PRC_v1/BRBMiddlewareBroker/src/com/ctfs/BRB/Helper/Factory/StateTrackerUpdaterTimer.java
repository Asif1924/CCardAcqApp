package com.ctfs.BRB.Helper.Factory;

import java.math.BigDecimal;

import com.ctfs.BRB.dblayer.StateTrackerTableEntity;

public class StateTrackerUpdaterTimer extends AbstractStateTrackerUpdater {

	@Override
	protected void updateCurrentLogic(StateTrackerTableEntity entity)
	{
		entity.setAppStateId(new BigDecimal("5"));
	}
}